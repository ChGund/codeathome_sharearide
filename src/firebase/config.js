import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLb-9fxo02_8f7qIMzWsXuDOXAGIbzgT4",
  authDomain: "share-a-ride-e4e6f.firebaseapp.com",
  projectId: "share-a-ride-e4e6f",
  storageBucket: "share-a-ride-e4e6f.appspot.com",
  messagingSenderId: "372703946429",
  appId: "1:372703946429:web:aa1004a23036003f82f9d4",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
