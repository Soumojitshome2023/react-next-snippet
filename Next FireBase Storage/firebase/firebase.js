import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyASiY-tmOHZyF5P6aRPzlxTeWUs23tGpb0",
  authDomain: "my-projects-4513c.firebaseapp.com",
  projectId: "my-projects-4513c",
  storageBucket: "my-projects-4513c.appspot.com",
  messagingSenderId: "749926622442",
  appId: "1:749926622442:web:e527b6f01a453807c7e393",
  measurementId: "G-0SL2M27YLF"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);