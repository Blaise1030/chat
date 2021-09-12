import firebase from "firebase";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVBYvKi5BtTthFoDbM5_wXQhyKfXvd6dA",
  authDomain: "chat-9fb62.firebaseapp.com",
  databaseURL: "https://chat-9fb62-default-rtdb.firebaseio.com",
  projectId: "chat-9fb62",
  storageBucket: "chat-9fb62.appspot.com",
  messagingSenderId: "257511002542",
  appId: "1:257511002542:web:97602e0100980d6933b83f",
  measurementId: "G-5GG5EXFS2W",
};

firebase.initializeApp(firebaseConfig);
const rtdb = firebase.database();
const db = firebase.firestore();
const auth = firebase.auth();

export {rtdb, db, auth, firebaseConfig};
