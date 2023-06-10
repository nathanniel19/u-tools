import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpQ7Gxi6jBBH2KFd9CBUMGS_Zd-qcIIeY",
  authDomain: "u-tools-c6964.firebaseapp.com",
  projectId: "u-tools-c6964",
  storageBucket: "u-tools-c6964.appspot.com",
  messagingSenderId: "223389477352",
  appId: "1:223389477352:web:8cfacb5ed49b0ce1f65c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app)

export { storage, db };