// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwJqb0C8qpHBaGrz2IpD42KevvwgxEkIs",
    authDomain: "ema-john-simple-e9bfa.firebaseapp.com",
    projectId: "ema-john-simple-e9bfa",
    storageBucket: "ema-john-simple-e9bfa.appspot.com",
    messagingSenderId: "831420883239",
    appId: "1:831420883239:web:c87d682810ddf108c88902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;