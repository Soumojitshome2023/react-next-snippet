import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get, remove } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAEi3jAssNqnbA7JmqOvWz4BVGV1HTPscY",
  authDomain: "for-realtime-database.firebaseapp.com",
  databaseURL: "https://for-realtime-database-default-rtdb.firebaseio.com",
  projectId: "for-realtime-database",
  storageBucket: "for-realtime-database.appspot.com",
  messagingSenderId: "957391871771",
  appId: "1:957391871771:web:cc5453305d63792d32bdbe"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database, ref, push, set, get, remove };