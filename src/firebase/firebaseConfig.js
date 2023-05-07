// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA_DmXNy5G70DSLb6XGpRFHpgfPHWvkvB8",
  authDomain: "final-ed0a1.firebaseapp.com",
  projectId: "final-ed0a1",
  storageBucket: "final-ed0a1.appspot.com",
  messagingSenderId: "748421352415",
  appId: "1:748421352415:web:e76257fbe7b3e6f685926a",
  measurementId: "G-FYYMEN4T6X"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);
export default getFirestore()
