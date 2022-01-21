// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdqwT5YUDaaLXWeJSdBoY2b0InMzeIn3Y",
  authDomain: "bookstoretest-86582.firebaseapp.com",
  projectId: "bookstoretest-86582",
  storageBucket: "bookstoretest-86582.appspot.com",
  messagingSenderId: "87326036924",
  appId: "1:87326036924:web:0992daba8a4a17469591b9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { db, app };
