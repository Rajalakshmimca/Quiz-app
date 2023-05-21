// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcUSDrrjDYQwySi1sQVZ1qoYxMSASZW4w",
    authDomain: "quiz-app-9bab6.firebaseapp.com",
    projectId: "quiz-app-9bab6",
    storageBucket: "quiz-app-9bab6.appspot.com",
    messagingSenderId: "483518384880",
    appId: "1:483518384880:web:3011fd45d9785434f21035",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);

