// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhRRcnhm6cZc-ygXhqPlG1T0C7_taA80I",
  authDomain: "auth-login-2c33f.firebaseapp.com",
  projectId: "auth-login-2c33f",
  storageBucket: "auth-login-2c33f.appspot.com",
  messagingSenderId: "614678461652",
  appId: "1:614678461652:web:22a6160e269d9d04ec4f41",
  measurementId: "G-LWFKGEWDD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth()
export { app , auth};