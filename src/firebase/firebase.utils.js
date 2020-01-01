import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6BXg6FE0VzucgPN_yWOgrkcZlkaODUuM",
  authDomain: "crwn-db-e921a.firebaseapp.com",
  databaseURL: "https://crwn-db-e921a.firebaseio.com",
  projectId: "crwn-db-e921a",
  storageBucket: "crwn-db-e921a.appspot.com",
  messagingSenderId: "658259098358",
  appId: "1:658259098358:web:3c7c93f727862898198ad7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //
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
      console.log("error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
