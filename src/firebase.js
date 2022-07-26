import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firestore from 'firebase/compat/firestore';

const firebaseConfig = {
    //Put your details
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };