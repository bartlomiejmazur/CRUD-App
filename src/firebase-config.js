import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_KEY}`,
  authDomain: "crud-app-9571a.firebaseapp.com",
  projectId: "crud-app-9571a",
  storageBucket: "crud-app-9571a.appspot.com",
  messagingSenderId: "572403867725",
  appId: "1:572403867725:web:80e838ce173a8e6b383c04",
  measurementId: "G-MMY4L4R7YB",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
