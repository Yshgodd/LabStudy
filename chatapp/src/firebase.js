import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6QyGGnuNqql51-If9q6TTe47qYyvhr30",
  authDomain: "chat-874b5.firebaseapp.com",
  projectId: "chat-874b5",
  storageBucket: "chat-874b5.appspot.com",
  messagingSenderId: "243601167987",
  appId: "1:243601167987:web:59f0612fc838995ae8fc06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);



