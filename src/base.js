import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSald5ltGjO8el09plujjmueh6fodqyhw",
  authDomain: "catch-of-the-day-hangindev.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-hangindev.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
