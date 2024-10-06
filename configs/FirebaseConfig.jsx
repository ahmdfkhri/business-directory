// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6UYOrj0VtpwtZtWT6z5UnFHjR2_Abfwc",
  authDomain: "business-directory-725c3.firebaseapp.com",
  projectId: "business-directory-725c3",
  storageBucket: "business-directory-725c3.appspot.com",
  messagingSenderId: "65416765708",
  appId: "1:65416765708:web:0b31003684ff1571df2929"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);