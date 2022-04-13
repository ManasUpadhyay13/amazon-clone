import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-Ocp7qESJxmhPEDwSIgQGm9gXYjRpYa8",
    authDomain: "e-clone-53ce2.firebaseapp.com",
    projectId: "e-clone-53ce2",
    storageBucket: "e-clone-53ce2.appspot.com",
    messagingSenderId: "797919743711",
    appId: "1:797919743711:web:bcfea3b2c97d79c27f636a",
    measurementId: "G-4EDQ3SLKVY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db , auth};