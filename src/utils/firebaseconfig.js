// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyXnE6tTlxOZ4kiWsSUbMv01ULmx3pNR8",
  authDomain: "loginfirebase-d8295.firebaseapp.com",
  projectId: "loginfirebase-d8295",
  storageBucket: "loginfirebase-d8295.appspot.com",
  messagingSenderId: "1064983566821",
  appId: "1:1064983566821:web:282cf6f3287c9887f0f70c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
