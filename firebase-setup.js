// firebase-setup.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMh3rbnYEZkMpg-6iOVSdp6yQPH50dspg",
    authDomain: "aaacounter.firebaseapp.com",
    projectId: "aaacounter",
    storageBucket: "aaacounter.appspot.com",
    messagingSenderId: "902544041405",
    appId: "1:902544041405:web:e1a8e3a60fcb531abc9ed4",
    measurementId: "G-G8K2J6WF7P",
    databaseURL: "https://aaacounter-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
