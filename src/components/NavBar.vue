<template>
  <nav v-if="user">
    <div>
        <p>
            Hi {{user.displayName}}
        </p>
        <p class="email">
            logged In as {{user.email}}
        </p>
        <div v-if="error">{{error}}</div>
        <button @click="logout">LogOut</button>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { auth } from "../firebase/config"
import getUser from "../composables/getUser"
export default {
    setup(){
        let error=ref("")
         let {user}=getUser()
        let logout=async()=>{
         try
         { 
         await auth.signOut();
            console.log("user logged out");
        }catch(err){
            error.value=err.message
            console.log(error.value);
        }
        }
       
        return {logout,error,user}
    }
}
</script>

<style>
      nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>