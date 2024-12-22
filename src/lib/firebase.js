import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-21c07.firebaseapp.com",
  projectId: "reactchat-21c07",
  storageBucket: "reactchat-21c07.firebasestorage.app",
  messagingSenderId: "969852471259",
  appId: "1:969852471259:web:b463dac72005ac6ff0c9fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()