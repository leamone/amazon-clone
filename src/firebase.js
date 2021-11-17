import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyBJQswRVKBcEjmQc8HfQkKjmVCBQwzRrAE",
  authDomain: "clone-4ab3a.firebaseapp.com",
  projectId: "clone-4ab3a",
  storageBucket: "clone-4ab3a.appspot.com",
  messagingSenderId: "997955812132",
  appId: "1:997955812132:web:65412142d18737134d11b1",
  measurementId: "G-BV1R6EY3K8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebase;