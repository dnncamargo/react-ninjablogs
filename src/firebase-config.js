import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDpzPtXUMFgYZdmUDBGngVSygHGgr1SijI",
    authDomain: "ninja-blogs-5faab.firebaseapp.com",
    projectId: "ninja-blogs-5faab",
    storageBucket: "ninja-blogs-5faab.appspot.com",
    messagingSenderId: "784276577664",
    appId: "1:784276577664:web:0ad937ba2658fee8db3565",
    measurementId: "G-SMHEVX69T7"
  };

  const app = initializeApp(firebaseConfig);

  
  export const db = getFirestore(app);