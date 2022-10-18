// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTi3zTz54arYaBoMhl96apS0B6Ef9ArpE",
  authDomain: "express-news-bd2d2.firebaseapp.com",
  projectId: "express-news-bd2d2",
  storageBucket: "express-news-bd2d2.appspot.com",
  messagingSenderId: "769427473530",
  appId: "1:769427473530:web:c735c5cda0fad71215e7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;