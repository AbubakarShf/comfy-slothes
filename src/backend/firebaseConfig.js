import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC40mkGs6YvbBJTyIoo00XwYO-G7FJ1aZo",
  authDomain: "login-1ff06.firebaseapp.com",
  projectId: "login-1ff06",
  storageBucket: "login-1ff06.appspot.com",
  messagingSenderId: "370915841418",
  appId: "1:370915841418:web:14f26c804d11cd83122473",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, db, googleProvider, twitterProvider };
