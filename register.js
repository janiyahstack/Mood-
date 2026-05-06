<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5OgOR5QJjMP1e4PYYu9CJv59w2rWQe-E",
    authDomain: "mood-website-3f1d7.firebaseapp.com",
    projectId: "mood-website-3f1d7",
    storageBucket: "mood-website-3f1d7.firebasestorage.app",
    messagingSenderId: "1082635172547",
    appId: "1:1082635172547:web:55b86b2eb61d843bd74076",
    measurementId: "G-2NJD236912"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
