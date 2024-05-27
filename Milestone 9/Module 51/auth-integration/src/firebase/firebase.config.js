// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdzJAB-rIZp0NOAnzlsvRJnlcB1LSCpEE",
  authDomain: "auth-integration-4c18d.firebaseapp.com",
  projectId: "auth-integration-4c18d",
  storageBucket: "auth-integration-4c18d.appspot.com",
  messagingSenderId: "431213673809",
  appId: "1:431213673809:web:1e1adf7eb9e0874b9e6770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;