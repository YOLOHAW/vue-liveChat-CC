<template>
  <h2>Sign Up Form</h2>
  <form @submit.prevent="signUp">
    <input name="displayName" type="text" placeholder="Enter name:" v-model="displayName">
    <input name="email" type="email" placeholder="Enter email:" v-model="email">
    <input name="password" type="password" placeholder="Enter password:" v-model="password">
    <div class="error" v-if="error">{{error}}</div>
    <button>Sign Up</button>
   
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignUp from "../composables/useSignUp"
export default {
    setup(props,context){
        let displayName=ref("")
        let email=ref("")
        let password=ref("")
        let {error,createAccount}=useSignUp()
        let signUp=async()=>{
           let res=await createAccount(email.value,password.value,displayName.value)
           if(res){
            //  console.log(res.user);
            context.emit("enterChatroom")
           }
        }
        return {displayName,email,password,signUp,error}
    }
}
</script>
// const res = await auth.createUserWithEmailAndPassword(email, password);
// const user = res.user;

// // once we get user object then update user display name using following method
// await user.updateProfile({displayName: name})
<style>

</style>