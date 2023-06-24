import { ref } from "vue"
import {auth} from "../firebase/config"
let error=ref("")

const loginAccount=async(email,password)=>{
    try{ 
        let res=await auth.signInWithEmailAndPassword(email,password)
         if(!res){
           throw new Error("Can not login account")
         }
         return res
        }catch(err){
         error.value=err.message
        }
}

const useLogIn=()=>{
    return {error,loginAccount}
}
export default useLogIn