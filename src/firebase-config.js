// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCutKGmoVCOSnyJfRlwH4pDFJopk1ANezQ",
  authDomain: "fir-course-c2fc5.firebaseapp.com",
  projectId: "fir-course-c2fc5",
  storageBucket: "fir-course-c2fc5.appspot.com",
  messagingSenderId: "3294033420",
  appId: "1:3294033420:web:caa76a7eb36043caa12029",
  measurementId: "G-3QBM8MDGD1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();