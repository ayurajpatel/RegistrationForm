//module------------------------------------
import { Signin } from "./module/script.js"


//selector---------------------------------
const loginForm = document.querySelector("#login-form")

//function---------------------------------

loginForm.onsubmit = async(e)=>{
    e.preventDefault()
    const user = {
        email : e.target[0].value.trim(),
        password: e.target[1].value.trim()
    }
    const res = await Signin(user)
    console.log(res)
}