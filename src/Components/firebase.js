import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAJIIN0d11TizMnAtqehAvHNZqPJDGLAUE",
    authDomain: "netflix-clone-up-95cd1.firebaseapp.com",
    projectId: "netflix-clone-up-95cd1",
    storageBucket: "netflix-clone-up-95cd1.appspot.com",
    messagingSenderId: "517564868447",
    appId: "1:517564868447:web:38c683e43d3788d6c178ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth} ;
export default db;
