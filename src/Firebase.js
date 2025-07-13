//import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDKyKxD-D1w6aheVR3XHP_LSjoTdqXeR7Y",
//   authDomain: "zaio--clone-36fc1.firebaseapp.com",
//   projectId: "zaio--clone-36fc1",
//   storageBucket: "zaio--clone-36fc1.firebasestorage.app",
//   messagingSenderId: "871445866375",
//   appId: "1:871445866375:web:0c5ae73c0118b9066a1522",
//   measurementId: "G-2RP5JNQ0ZK"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export { db, auth };
// Firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase config (replace these with your real config values)
// const firebaseConfig = {
//    apiKey: "AIzaSyDKyKxD-D1w6aheVR3XHP_LSjoTdqXeR7Y",
//    authDomain: "zaio--clone-36fc1.firebaseapp.com",
//    projectId: "zaio--clone-36fc1",
//    storageBucket: "zaio--clone-36fc1.firebasestorage.app",
//    messagingSenderId: "871445866375",
//    appId: "1:871445866375:web:0c5ae73c0118b9066a1522",
//    measurementId: "G-2RP5JNQ0ZK"
// }
const firebaseConfig = {
  apiKey: "AIzaSyDKyKxD-D1w6aheVR3XHP_LSjoTdqXeR7Y",
  authDomain: "zaio--clone-36fc1.firebaseapp.com",
  projectId: "zaio--clone-36fc1",
  storageBucket: "zaio--clone-36fc1.appspot.com",  // <-- fix here
  messagingSenderId: "871445866375",
  appId: "1:871445866375:web:0c5ae73c0118b9066a1522",
  measurementId: "G-2RP5JNQ0ZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up database and auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export them
export { db, auth };
