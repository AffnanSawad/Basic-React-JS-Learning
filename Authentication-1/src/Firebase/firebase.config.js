// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx111y2mCgL0fIWBgg1_IYL6ZN-sa53-8",
  authDomain: "authentication-1-b63c7.firebaseapp.com",
  projectId: "authentication-1-b63c7",
  storageBucket: "authentication-1-b63c7.appspot.com",
  messagingSenderId: "507735932549",
  appId: "1:507735932549:web:40c8c7c7596a084a4e73ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// MUST BE EXPORT KORTE HBE

export default auth;