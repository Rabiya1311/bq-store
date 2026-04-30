import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8qTQ5joylMFr5umDoGzTcCw1I_CcbLGU",
  authDomain: "bq-store-8ba77.firebaseapp.com",
  databaseURL: "https://bq-store-8ba77-default-rtdb.firebaseio.com",
  projectId: "bq-store-8ba77",
  storageBucket: "bq-store-8ba77.firebasestorage.app",
  messagingSenderId: "673147315144",
  appId: "1:673147315144:web:5f28aa0654eb98b8aed6fd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);