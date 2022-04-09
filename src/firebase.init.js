// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0BENb7oh0iHrJpOxZbLx2RbGqJ5KQpGo",
  authDomain: "ema-jhon-simple-b9173.firebaseapp.com",
  projectId: "ema-jhon-simple-b9173",
  storageBucket: "ema-jhon-simple-b9173.appspot.com",
  messagingSenderId: "788473664645",
  appId: "1:788473664645:web:6dba37def2770367c605ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 export default auth;