// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdrTxmrBF8W-K2OkYvzYPL7571dFO3beM",
  authDomain: "codeflex-miniapp.firebaseapp.com",
  databaseURL:
    "https://codeflex-miniapp-default-rtdb.asia-southeast1.firebasedatabase.app", // Updated databaseURL
  projectId: "codeflex-miniapp",
  storageBucket: "codeflex-miniapp.appspot.com",
  messagingSenderId: "307706444225",
  appId: "1:307706444225:web:429ca62875e9499c78d740",
  measurementId: "G-R3255YD7QJ",
};

// Initialize Firebase
const firebaseDB = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseDB);
export { firebaseDB };
