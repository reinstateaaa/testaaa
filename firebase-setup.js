<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAMh3rbnYEZkMpg-6iOVSdp6yQPH50dspg",
    authDomain: "aaacounter.firebaseapp.com",
    projectId: "aaacounter",
    storageBucket: "aaacounter.appspot.com",
    messagingSenderId: "902544041405",
    appId: "1:902544041405:web:e1a8e3a60fcb531abc9ed4",
    measurementId: "G-G8K2J6WF7P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  // Initialize the counter in the database if it doesn't exist
  const counterRef = database.ref('clickCounter');
  counterRef.transaction((currentCount) => currentCount || 0);
</script>
