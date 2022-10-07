import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeIbTYYEAJS-GOij_4KcM3QBQadUY_3sE",
  authDomain: "clone-78fdd.firebaseapp.com",
  projectId: "clone-78fdd",
  storageBucket: "clone-78fdd.appspot.com",
  messagingSenderId: "748169997472",
  appId: "1:748169997472:web:793149dc243df6dd3c6dc5",
  measurementId: "G-N5MPDEJDHM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
