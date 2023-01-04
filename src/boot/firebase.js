// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",
  authDomain: "firumon-9abec.firebaseapp.com",
  projectId: "firumon-9abec",
  storageBucket: "firumon-9abec.appspot.com",
  messagingSenderId: "985218982992",
  appId: "1:985218982992:web:5c9162029480c63f04dd55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export * from "firebase/firestore"
