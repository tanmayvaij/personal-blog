import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6oHtRSY5KXV4z5XMTlcgud6SiMBKgJVg",
  authDomain: "writer-club-1398d.firebaseapp.com",
  projectId: "writer-club-1398d",
  storageBucket: "writer-club-1398d.appspot.com",
  messagingSenderId: "368343925281",
  appId: "1:368343925281:web:8eed95c70c9df735dfd960",
  measurementId: "G-GG7LW3YYC4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
