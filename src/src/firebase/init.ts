// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd646C3ZZfag5t2hx1cKexMnHiSBQOOlg",
  authDomain: "info28-a5bdb.firebaseapp.com",
  projectId: "info28-a5bdb",
  storageBucket: "info28-a5bdb.appspot.com",
  messagingSenderId: "906197479837",
  appId: "1:906197479837:web:a71a4bd50f14164a8dff74"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const firestoreDB = getFirestore(app)
