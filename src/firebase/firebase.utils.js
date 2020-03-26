import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDd-xdMNo1DLpsdzWoVWqAQRpBkE2K9VBg",
    authDomain: "crwn-db-99032.firebaseapp.com",
    databaseURL: "https://crwn-db-99032.firebaseio.com",
    projectId: "crwn-db-99032",
    storageBucket: "crwn-db-99032.appspot.com",
    messagingSenderId: "721892232452",
    appId: "1:721892232452:web:000c9e24d36d841bd41451",
    measurementId: "G-N533LZTRFE"
  };


  firebase.initializeApp(firebaseConfig);


  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;