import firebase from "firebase";
import {auth, db} from "./firebase";

const USER = "user";

export const signIn = async (
  onSignInSuccess: (userCredentials: any) => void
) => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  const provider = new firebase.auth.GoogleAuthProvider();
  const signIn = await firebase.auth().signInWithPopup(provider);
  if (signIn.additionalUserInfo?.isNewUser) {
    db.collection(USER).doc(signIn.user?.uid).set({
      user_id: signIn.user?.uid,
      user_name: signIn.user?.displayName,
    });
  }
  onSignInSuccess(signIn.user);
};

export const signOut = async () => await firebase.auth().signOut();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
