// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
} = getEnvironments();

// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//     apiKey: "AIzaSyBraoC4W45StMT6sx2BluD1raUWDHt5uWo",
//     authDomain: "react-curso-v2024.firebaseapp.com",
//     projectId: "react-curso-v2024",
//     storageBucket: "react-curso-v2024.appspot.com",
//     messagingSenderId: "1067786271976",
//     appId: "1:1067786271976:web:ba8b26cdc29d844b12dd5d",
// };

// Testing
// const firebaseConfig = {
//     apiKey: "AIzaSyC76Ck7u94n0H8uT3PnP13oWgavZcqKAe4",
//     authDomain: "journalapp-v24-testing.firebaseapp.com",
//     projectId: "journalapp-v24-testing",
//     storageBucket: "journalapp-v24-testing.appspot.com",
//     messagingSenderId: "211983037609",
//     appId: "1:211983037609:web:ed6bf152482029e829e5b8",
// };

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
};

// console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
