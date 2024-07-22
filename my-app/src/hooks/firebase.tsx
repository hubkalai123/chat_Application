// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFOmEeuI7Dh4h9nztVCmJPH9NsKk1t6p0",
  authDomain: "chatapp-3d5f2.firebaseapp.com",
  projectId: "chatapp-3d5f2",
  storageBucket: "chatapp-3d5f2.appspot.com",
  messagingSenderId: "558932720714",
  appId: "1:558932720714:web:48a54a50daab635370bab3",
  measurementId: "G-DKTYNWHH29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Set up the Google Auth provider
export const provider = new GoogleAuthProvider();
