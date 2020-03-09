import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMEnCS1HtV47Dz9PwHhd4tU8kTwOQ4J0A",
  authDomain: "crown-db-b302d.firebaseapp.com",
  databaseURL: "https://crown-db-b302d.firebaseio.com",
  projectId: "crown-db-b302d",
  storageBucket: "crown-db-b302d.appspot.com",
  messagingSenderId: "485277926240",
  appId: "1:485277926240:web:3646cf6024726c6d6fd405",
  measurementId: "G-8PTGPJKE7J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
