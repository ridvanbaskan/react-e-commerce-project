import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhl6sd7fpSvREzgpUk9q39xzZa5zL0aHM",
  authDomain: "dodi-263420.firebaseapp.com",
  databaseURL: "https://dodi-263420.firebaseio.com",
  projectId: "dodi-263420",
  storageBucket: "dodi-263420.appspot.com",
  messagingSenderId: "812966433616",
  appId: "1:812966433616:web:517192e81e30d673c65255",
  measurementId: "G-5PZG63DS2B"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
