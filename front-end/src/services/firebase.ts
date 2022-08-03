import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtj9-vABy8DaKqcSt2vGp4m8rbR6HHf5w",
  authDomain: "fox-entregas-2092c.firebaseapp.com",
  projectId: "fox-entregas-2092c",
  storageBucket: "fox-entregas-2092c.appspot.com",
  messagingSenderId: "642039989577",
  appId: "1:642039989577:web:5795d658d665f06a56c698"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)
