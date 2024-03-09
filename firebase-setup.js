<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
</script>
