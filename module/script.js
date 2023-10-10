import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
const firebaseConfig = {
  apiKey: "AIzaSyALwMl3_dVbqky2Or9VAGOKF8QfCUMZ_1U",
  authDomain: "fire-8eb59.firebaseapp.com",
  projectId: "fire-8eb59",
  storageBucket: "fire-8eb59.appspot.com",
  messagingSenderId: "436662380952",
  appId: "1:436662380952:web:a4b4981bc5d4e93442e3ed",
  measurementId: "G-0GWLWXB64L"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()


export const Signup = async (user)=>{
   try{
    const {user: {uid}} = await createUserWithEmailAndPassword(auth, user.email, user.password)
    return{
      success: true,
      user : {
        id : uid
      }
    }
   }
   catch(error){
      return{
        success: false,
        error 
      }
   }
}






