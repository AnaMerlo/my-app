
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAR-cFX6inxiaucPkiNuqWOpJ7P2uYh3Ko",
    authDomain: "libreria-react-bb2b4.firebaseapp.com",
    projectId: "libreria-react-bb2b4",
    storageBucket: "libreria-react-bb2b4.appspot.com",
    messagingSenderId: "1048585023654",
    appId: "1:1048585023654:web:d7910e3067b6f3b88d4467"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
