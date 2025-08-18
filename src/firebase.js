// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZeuYB9j6Zk5vGWh7CU96GZonpMowdFIY",
  authDomain: "civicconnect-gh-31d03.firebaseapp.com",
  projectId: "civicconnect-gh-31d03",
  storageBucket: "civicconnect-gh-31d03.firebasestorage.app",
  messagingSenderId: "1042679472549",
  appId: "1:1042679472549:web:82dd8c20b333a2c9f3884c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and export
export const db = getFirestore(app);
