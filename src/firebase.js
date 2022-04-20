import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCLtyeHwxPrXe6kErWKxml9t9sPjyg_dMY",
  authDomain: "shs-hosper.firebaseapp.com",
  projectId: "shs-hosper",
  storageBucket: "shs-hosper.appspot.com",
  messagingSenderId: "1098144029757",
  appId: "1:1098144029757:web:6457a387f65e3999121e54",
  measurementId: "G-XG5TCLCM2X"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const db = firebaseApp.firestore();
  export const storage = firebase.storage();

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// // export const provider = new firebase.auth.GoogleAuthProvider();
// export const db = firebaseApp.firestore();
// export const storage = firebase.storage();

// export {auth, firebase};

