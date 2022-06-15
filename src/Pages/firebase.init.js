// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB840gc06xQ2PrrFetjWQYRdT2HJtq4-kc",
  authDomain: "dashboard-4d506.firebaseapp.com",
  projectId: "dashboard-4d506",
  storageBucket: "dashboard-4d506.appspot.com",
  messagingSenderId: "180872387263",
  appId: "1:180872387263:web:e9fbf8959180e18541440a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
