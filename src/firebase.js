// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB59i-DMDYNzM1tIt2khm2FUCZ0RptrrZE",
  authDomain: "notificacion-61d3d.firebaseapp.com",
  projectId: "notificacion-61d3d",
  storageBucket: "notificacion-61d3d.appspot.com",
  messagingSenderId: "1062242500294",
  appId: "1:1062242500294:web:76acad238c2e82831721c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);