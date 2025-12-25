import { initializeApp } from "firebase/app";
import { getDatabase, ref, runTransaction } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDsXTZfw8rQvV1vyRB9vxVU8uMo4X4wgwg",
  authDomain: "teknofestankarauni-counter.firebaseapp.com",
  databaseURL: "https://teknofestankarauni-counter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "teknofestankarauni-counter",
  storageBucket: "teknofestankarauni-counter.firebasestorage.app",
  messagingSenderId: "146240542530",
  appId: "1:146240542530:web:a61535a4c764de22265adb"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const incrementCount = (linkId) => {
  const countRef = ref(db, `clicks/${linkId}`);
  
  runTransaction(countRef, (currentCount) => {
    return (currentCount || 0) + 1;
  });
};