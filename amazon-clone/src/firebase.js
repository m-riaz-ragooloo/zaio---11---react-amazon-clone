//core firebase import
import { initializeApp } from "firebase/app";

//service imports
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBegwkip5eVuYWWz4rrUMiv80yPVRPoqbc",
  authDomain: "zaio---11----clone.firebaseapp.com",
  projectId: "zaio---11----clone",
  storageBucket: "zaio---11----clone.firebasestorage.app",
  messagingSenderId: "691612579527",
  appId: "1:691612579527:web:ddfe95ff15f580c155b0e2",
  measurementId: "G-PFLHSB2TMK"
};

//initialize app
const app = initializeApp(firebaseConfig);

//initialize services
const auth = getAuth(app);
const db = getFirestore(app);

//export initialized services (add as keys)
export { auth, db };