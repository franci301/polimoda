// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRAEfhUjfLljfrOyrTIu1rtDCNVmnmXd4",
    authDomain: "poli-app-88fd5.firebaseapp.com",
    projectId: "poli-app-88fd5",
    storageBucket: "poli-app-88fd5.appspot.com",
    messagingSenderId: "856461053476",
    appId: "1:856461053476:web:fb1b0f7eefc12600d5d2b1",
    measurementId: "G-SPSSDYV068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);