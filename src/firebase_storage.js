// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKEVVAqBJsnqg1-Zv_LTAiHx8HXQ-l624",
  authDomain: "product-example-app.firebaseapp.com",
  projectId: "product-example-app",
  storageBucket: "product-example-app.appspot.com",
  messagingSenderId: "283358673746",
  appId: "1:283358673746:web:17ea56385df670ba1e188b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create a root reference
const storage = getStorage();

export default storage;