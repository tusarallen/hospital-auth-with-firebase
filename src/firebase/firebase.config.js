// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDErg6PAf3HR04iDYVeM21ZwcQAmXR_Kfs",
  authDomain: "hospital-auth-with-firebase.firebaseapp.com",
  projectId: "hospital-auth-with-firebase",
  storageBucket: "hospital-auth-with-firebase.appspot.com",
  messagingSenderId: "849890455378",
  appId: "1:849890455378:web:ace8b60243c0805d47d48b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
