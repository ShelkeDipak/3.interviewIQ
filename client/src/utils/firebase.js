
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-68419.firebaseapp.com",
  projectId: "interview-68419",
  storageBucket: "interview-68419.firebasestorage.app",
  messagingSenderId: "937761131124",
  appId: "1:937761131124:web:c4557a57a03ef65b35df21"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}