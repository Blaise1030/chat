import firebase from "firebase";

const firebaseConfig = {
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_FIREBASE_MESSAGING_SENDER_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const rtdb = firebase.database();
const db = firebase.firestore();
const auth = firebase.auth();

export {app, rtdb, db, auth};
