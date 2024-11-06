// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1DsuCrqcMFCIkY-Sz2aV5t84jo4itYYg",
  authDomain: "gen-lang-client-0177975383.firebaseapp.com",
  databaseURL: "https://gen-lang-client-0177975383-default-rtdb.firebaseio.com",
  projectId: "gen-lang-client-0177975383",
  storageBucket: "gen-lang-client-0177975383.appspot.com",
  messagingSenderId: "722566734046",
  appId: "1:722566734046:web:204a022bc9859cb59d624f",
  measurementId: "G-TJ50VYKW8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
