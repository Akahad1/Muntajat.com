// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ojR0YvWignxxM6IzkAEZmPp-tYkdpYo",
  authDomain: "muntajat-2bd0c.firebaseapp.com",
  projectId: "muntajat-2bd0c",
  storageBucket: "muntajat-2bd0c.appspot.com",
  messagingSenderId: "442084047107",
  appId: "1:442084047107:web:1fd39a82fd6190caff5136",
  measurementId: "G-L3SYZJYE7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;