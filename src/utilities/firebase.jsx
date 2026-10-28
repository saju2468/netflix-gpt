// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6gRAeWeif-LjQBhe4wb1wGN5TeWqrJaU",
  authDomain: "netflixgpt-e6408.firebaseapp.com",
  projectId: "netflixgpt-e6408",
  storageBucket: "netflixgpt-e6408.firebasestorage.app",
  messagingSenderId: "822467801702",
  appId: "1:822467801702:web:8ca38a3758f9ffaa80b3a7",
  measurementId: "G-55C154SZW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
