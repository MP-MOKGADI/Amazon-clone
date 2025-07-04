import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKyKxD-D1w6aheVR3XHP_LSjoTdqXeR7Y",
  authDomain: "zaio--clone-36fc1.firebaseapp.com",
  projectId: "zaio--clone-36fc1",
  storageBucket: "zaio--clone-36fc1.firebasestorage.app",
  messagingSenderId: "871445866375",
  appId: "1:871445866375:web:0c5ae73c0118b9066a1522",
  measurementId: "G-2RP5JNQ0ZK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };