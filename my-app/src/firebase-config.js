import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//Import the varaibles
//import {API, AUTH, PROJ, STOR, MESS, APP} from './variables';
const firebaseConfig = {
  apiKey: "AIzaSyBVUq2lzoHtEiaeqttF3_DcLmmAiUfrDLw",
  authDomain: "login-d1770.firebaseapp.com",
  projectId: "login-d1770",
  storageBucket: "login-d1770.appspot.com",
  messagingSenderId: "480233248369",
  appId: "1:480233248369:web:b5ef351e861fd0e9b4add0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
