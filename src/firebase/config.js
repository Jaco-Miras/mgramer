import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaKmGEw93GN22tYximd60mV-D7APTweUw",
    authDomain: "mgramer-c4b5c.firebaseapp.com",
    projectId: "mgramer-c4b5c",
    storageBucket: "mgramer-c4b5c.appspot.com",
    messagingSenderId: "45019516805",
    appId: "1:45019516805:web:7c6c92b8f043d2b85c7eec",
    measurementId: "G-PFF481M7W6"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };