import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc3Wiie2fkESHp8yYSPcsRKAJ-wuRZ0gE",
  authDomain: "portfolio-5b70b.firebaseapp.com",
  projectId: "portfolio-5b70b",
  storageBucket: "portfolio-5b70b.appspot.com",
  messagingSenderId: "20099066882",
  appId: "1:20099066882:web:7ea2e13412024a64410b1b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }