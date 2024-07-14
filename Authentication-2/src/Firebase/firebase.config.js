// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP2N_cmuVTlOS5ppLSO-7idTvHi1DifCk",
  authDomain: "authentication-2-11339.firebaseapp.com",
  projectId: "authentication-2-11339",
  storageBucket: "authentication-2-11339.appspot.com",
  messagingSenderId: "971009780747",
  appId: "1:971009780747:web:9b17c83614f85dd548eb0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;