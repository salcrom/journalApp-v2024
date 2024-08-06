// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBraoC4W45StMT6sx2BluD1raUWDHt5uWo",
    authDomain: "react-curso-v2024.firebaseapp.com",
    projectId: "react-curso-v2024",
    storageBucket: "react-curso-v2024.appspot.com",
    messagingSenderId: "1067786271976",
    appId: "1:1067786271976:web:ba8b26cdc29d844b12dd5d",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
