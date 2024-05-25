/**
 * 
 *          -----------------------------------------
 *                 INITIAL SETUP (INSTALLATION)
 *          -----------------------------------------
 * 
 * 
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase (npm install firebase)
 * 5. add config file to your project
 * ! 6. DANGER: Do not publish or make firebase config to public by pushing those to GitHub
 *          --------------------------
 *                 INTEGRATION
 *          --------------------------
 * 7. Go to docs > build > authentication > web > get started
 * 8. export app from app from the firebase.config.js file: export default app
 * 9. Login.jsx: import { getAuth } from "firebase/auth";
 * 10. create const auth = getAuth(app);
 *          ----------------------------
 *                 PROVIDER SETUP
 *          ----------------------------
 * 11. import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopup and pass auth and provider 
 * 13. activate signIn method (google, facebook, twitter, github etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 15.
 */