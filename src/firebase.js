import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD1O_TGbyRY6CvhVqXxoMiehq7fF24Pcns",
    authDomain: "hosper-9b064.firebaseapp.com",
    projectId: "hosper-9b064",
    storageBucket: "hosper-9b064.appspot.com",
    messagingSenderId: "118858377499",
    appId: "1:118858377499:web:eb4ac36b69e96673b68bbe",
    measurementId: "G-QFXFPBKBX1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebaseApp.firestore();
export const storage = firebase.storage();

export {auth, firebase};

