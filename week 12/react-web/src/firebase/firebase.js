import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsyeMNd8RC-7WBCsnOCBMHGcnotHYf248",
  authDomain: "pbfapp-2ea67.firebaseapp.com",
  projectId: "pbfapp-2ea67",
  storageBucket: "pbfapp-2ea67.appspot.com",
  messagingSenderId: "230446563927",
  appId: "1:230446563927:web:8a736847213becb9f0d912",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // For Authentication
const db = getFirestore(firebaseApp); // For Using Database

export { auth, db };
