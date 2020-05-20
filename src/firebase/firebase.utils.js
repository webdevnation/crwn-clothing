import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqGPekSTt1LV7n6an3eAHyJm5md9VpEOI",
    authDomain: "crown-db-44cd8.firebaseapp.com",
    databaseURL: "https://crown-db-44cd8.firebaseio.com",
    projectId: "crown-db-44cd8",
    storageBucket: "crown-db-44cd8.appspot.com",
    messagingSenderId: "264065181698",
    appId: "1:264065181698:web:6f0e90d1851f9e44031f1b"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;