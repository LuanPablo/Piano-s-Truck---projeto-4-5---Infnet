import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWSBI2h8KS9SJQA5xcrjKgpVsh5BMZbwA",
  authDomain: "piano-s-truck.firebaseapp.com",
  projectId: "piano-s-truck",
  storageBucket: "piano-s-truck.appspot.com",
  messagingSenderId: "354633806441",
  appId: "1:354633806441:web:08487cc2c1955359b3e8f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)

