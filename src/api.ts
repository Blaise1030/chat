import firebase from "firebase";

export const signIn = async (
  onSignInSuccess: (userCredentials: any) => void
) => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  const provider = new firebase.auth.GoogleAuthProvider();
  const signIn = await firebase.auth().signInWithPopup(provider);
  onSignInSuccess(signIn);
};

export const loginStateListener = ({
  onUserIsSignIn,
  onUserNotSignedIn,
}: {
  onUserIsSignIn: (v: any) => void;
  onUserNotSignedIn: () => void;
}) =>
  firebase
    .auth()
    .onAuthStateChanged((user) =>
      user ? onUserIsSignIn(user) : onUserNotSignedIn()
    );
