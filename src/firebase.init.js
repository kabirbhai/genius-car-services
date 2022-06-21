// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrze9SsbqdFmYvRucq8LbpMWPV1lBe7Rw",
  authDomain: "genius-car-88c43.firebaseapp.com",
  projectId: "genius-car-88c43",
  storageBucket: "genius-car-88c43.appspot.com",
  messagingSenderId: "934576480488",
  appId: "1:934576480488:web:d854d0d0b418e6f5e7e95d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
