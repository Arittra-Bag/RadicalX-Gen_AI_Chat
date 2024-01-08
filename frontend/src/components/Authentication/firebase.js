// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLY3xHZ9hxdgOtpYBND6H70j1QeMmN1_M",
  authDomain: "relx-b0e5d.firebaseapp.com",
  projectId: "relx-b0e5d",
  storageBucket: "relx-b0e5d.appspot.com",
  messagingSenderId: "237052456202",
  appId: "1:237052456202:web:fddebbf269bcb935e75ef3",
  measurementId: "G-YX863309PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};