// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ofQur7qezZxVraArFJSTMV7FF8NfzuE",
  authDomain: "jobportal-ddfc9.firebaseapp.com",
  projectId: "jobportal-ddfc9",
  storageBucket: "jobportal-ddfc9.appspot.com", // Fixed storageBucket domain
  messagingSenderId: "758047080345",
  appId: "1:758047080345:web:24fd209a3a7aab2f499d08",
  measurementId: "G-8Q1R5BJJG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export required functions
export { auth, provider, signInWithPopup };
export default app;
