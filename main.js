//module------------------------------------

import { Signup } from "./module/script.js"

//selector---------------------------------

const signupForm = document.querySelector("#signup-form")
const result = document.querySelector("#result")

//function---------------------------------
signupForm.onsubmit = async(e)=>{
    e.preventDefault()
    const user = {
       email :  e.target[0].value.trim(),
       password :  e.target[1].value.trim()
    }
   const {success} = await Signup(user)
   if(success) 
   return (
       result.innerHTML = "Registration Success !",
       result.className = "text-green-600 font-semibold p-2"
  )
  result.innerHTML = "Registration Failed !"
  result.className = "text-rose-500 font-semibold p-2"
}