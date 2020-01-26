import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// initialize firebase
const config = {
    apiKey: "AIzaSyBxqQvzaUAL250ss_BSGEcMXi8ZUDxFy2I",
    authDomain: "crypto-kar.firebaseapp.com",
    databaseURL: "https://crypto-kar.firebaseio.com",
    projectId: "crypto-kar",
    storageBucket: "crypto-kar.appspot.com",
    messagingSenderId: "646375577082",
    appId: "1:646375577082:web:74298b07ffca0a58754043"
};

firebase.initializeApp(config);

export default firebase;