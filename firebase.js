// firebase.js - Safe Connection File for NG Care
// Is file ko alag rakho, delete mat karna

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Yahan apna Firebase Config daalo - Firebase Console se copy karke
const firebaseConfig = {
  apiKey: "TUMHARA_API_KEY_YAHAN_DALO",
  authDomain: "TUMHARA_PROJECT.firebaseapp.com",
  projectId: "TUMHARA_PROJECT_ID",
  storageBucket: "TUMHARA_PROJECT.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
