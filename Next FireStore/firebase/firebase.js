import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, getDocs, getDoc, onSnapshot, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlwiZDMNC8uelhYhkIAPvUQREdzpRti0I",
  authDomain: "todo-37314.firebaseapp.com",
  projectId: "todo-37314",
  storageBucket: "todo-37314.appspot.com",
  messagingSenderId: "1080428805047",
  appId: "1:1080428805047:web:ed32fcdd5a98bdf7630632"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, collection, addDoc, doc, setDoc, updateDoc, getDocs, getDoc, onSnapshot, deleteDoc };
