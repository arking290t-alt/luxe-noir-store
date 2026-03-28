// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfjYEb6APyLgPhSw7ylEShir1l77JExm0",
  authDomain: "project-rich-41bf8.firebaseapp.com",
  projectId: "project-rich-41bf8",
  storageBucket: "project-rich-41bf8.firebasestorage.app",
  messagingSenderId: "3237483474",
  appId: "1:3237483474:web:1a50d9d39e0bb7b7b36e0b",
  measurementId: "G-5WZ0VZSPNR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
