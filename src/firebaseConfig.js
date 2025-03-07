import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKQtnzBOYISvMqSV4Z3tZkB1oxzkRcgQI",
    authDomain: "truckhub-879ea.firebaseapp.com",
    projectId: "truckhub-879ea",
    storageBucket: "truckhub-879ea.firebasestorage.app",
    messagingSenderId: "201318841223",
    appId: "1:201318841223:web:8138d5b3644370fd833122",
    measurementId: "G-XSEKHQ0ZXD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
