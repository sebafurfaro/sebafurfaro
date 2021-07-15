import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCjk1W0ff88RAc4Akf2YgPEOD6t8T8ThXw",
    authDomain: "sfurfarocoder.firebaseapp.com",
    projectId: "sfurfarocoder",
    storageBucket: "sfurfarocoder.appspot.com",
    messagingSenderId: "435366644923",
    appId: "1:435366644923:web:7032f5f8109f8e717fed9e"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();

  