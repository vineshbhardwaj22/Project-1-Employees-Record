// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHKJqWW8He5UAt99rtzWSVxa-0O3Rukj8",
  authDomain: "firstproject-195ca.firebaseapp.com",
  projectId: "firstproject-195ca",
  storageBucket: "firstproject-195ca.firebasestorage.app",
  messagingSenderId: "216643120740",
  appId: "1:216643120740:web:c016b704a5e84d081df971"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

//  we are connecting our application to database
export const db = getFirestore(app)