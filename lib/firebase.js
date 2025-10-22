import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfnBGgRG5WuqpCeZYthw3T_5ik51UBY_g",
  authDomain: "bridgebond-63a41.firebaseapp.com",
  projectId: "bridgebond-63a41",
  storageBucket: "bridgebond-63a41.appspot.com",
  messagingSenderId: "35502683359",
  appId: "1:35502683359:web:d7081920c2532ba9e3a56a",
  measurementId: "G-JZZWZK55HE"
};

// ✅ Initialize app only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Optional: enable analytics on client only
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) getAnalytics(app);
  });
}

// ✅ Export initialized services
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };

