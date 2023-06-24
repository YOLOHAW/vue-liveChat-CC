import { ref } from "vue"
import {auth} from "../firebase/config"
let error=ref("")

const createAccount=async(email,password,displayName)=>{
    try { 
        let res=await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("can not create user")
        }
        res.user.updateProfile({displayName})
        return res
        }catch(err){
            error.value=err.message
        }
}

const useSignUp=()=>{
    return {error,createAccount}
}

export default useSignUp