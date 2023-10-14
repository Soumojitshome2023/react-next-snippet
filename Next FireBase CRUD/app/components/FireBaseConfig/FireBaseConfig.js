// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

function firebaseConfig() {
    const firebaseConfig = {
        apiKey: "AIzaSyA8_jm9lNofHXltgxsz3OCSr22ChwmF-fM",
        authDomain: "medical-shop-f4c7d.firebaseapp.com",
        databaseURL: "https://medical-shop-f4c7d-default-rtdb.firebaseio.com",
        projectId: "medical-shop-f4c7d",
        storageBucket: "medical-shop-f4c7d.appspot.com",
        messagingSenderId: "67989827898",
        appId: "1:67989827898:web:3a97f1eb58589af89a2003",
        measurementId: "G-253C30REZY"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);

}
export default firebaseConfig;

