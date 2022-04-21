// import firebase from 'firebase';
import firebase from 'firebase/app'
// var firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyD1O_TGbyRY6CvhVqXxoMiehq7fF24Pcns",
  authDomain: "hosper-9b064.firebaseapp.com",
  databaseURL: "https://hosper-9b064-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hosper-9b064",
  storageBucket: "hosper-9b064.appspot.com",
  messagingSenderId: "118858377499",
  appId: "1:118858377499:web:eb4ac36b69e96673b68bbe",
  measurementId: "G-QFXFPBKBX1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebaseApp.firestore();
export const storage = firebase.storage();

// export {auth, firebase};

