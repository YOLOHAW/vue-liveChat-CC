<template>
  <h2>Log In Form</h2>
  <form @submit.prevent="logIn">
    <input name="email" type="email" placeholder="Enter email:" v-model="email">
    <input name="password" type="password" placeholder="Enter password:" v-model="password">
    <div class="error" v-if="error">{{error}}</div>
    <button>LogIn</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from "../firebase/config"
import useLogIn from "../composables/useLoginIn"
export default {
    setup(props,context){
        let email=ref("")
        let password=ref("")
        let {error,loginAccount}=useLogIn()
        let logIn=async()=>{
          let res=await loginAccount(email.value,password.value)
          if(res){
            // console.log(res.user);
            context.emit("enterChatroom")
          }
        }
        return {email,password,logIn,error}
    }
}
</script>

<style>

</style>