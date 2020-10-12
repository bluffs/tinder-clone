import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGimdb463JwsgFJX68Dj0p72JJnIFuxvo",
    authDomain: "tinder-clone-bda98.firebaseapp.com",
    databaseURL: "https://tinder-clone-bda98.firebaseio.com",
    projectId: "tinder-clone-bda98",
    storageBucket: "tinder-clone-bda98.appspot.com",
    messagingSenderId: "509571335986",
    appId: "1:509571335986:web:8a1442a149e4d7ec66392b",
    measurementId: "G-VMDGVPERZF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;