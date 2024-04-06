// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzzWJTOyfJ_LRpaBurp3RweinS4JnIPWs",
  authDomain: "react-dragon-news-auth-fbaee.firebaseapp.com",
  projectId: "react-dragon-news-auth-fbaee",
  storageBucket: "react-dragon-news-auth-fbaee.appspot.com",
  messagingSenderId: "43011032124",
  appId: "1:43011032124:web:feda177ee5fe594bf5af39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;