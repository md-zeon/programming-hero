import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVwpZQFE-QNZd0Ji6TlXjur7n_px-NOXk",
  authDomain: "user-email-password-auth-b287f.firebaseapp.com",
  projectId: "user-email-password-auth-b287f",
  storageBucket: "user-email-password-auth-b287f.appspot.com",
  messagingSenderId: "1033858097773",
  appId: "1:1033858097773:web:20db9d439e1e56d95f9564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export default app;

const auth = getAuth(app);

export default auth;