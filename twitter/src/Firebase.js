import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkk1aLAWosM1NStbxSRyy2q4nClyGIhgY",
    authDomain: "twitter-clone-251ad.firebaseapp.com",
    projectId: "twitter-clone-251ad",
    storageBucket: "twitter-clone-251ad.appspot.com",
    messagingSenderId: "981840676728",
    appId: "1:981840676728:web:97cae9078b01756208aa8d",
    measurementId: "G-EGR2DNLD78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;