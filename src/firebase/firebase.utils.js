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

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef =  firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName, 
                email,
                createAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user...', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;