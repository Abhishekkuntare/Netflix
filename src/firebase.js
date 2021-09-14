import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDY7y7dnr6gQUfbCodBLpLlCi2wBtOvcvk",
    authDomain: "netflix-153d3.firebaseapp.com",
    projectId: "netflix-153d3",
    storageBucket: "netflix-153d3.appspot.com",
    messagingSenderId: "90958848108",
    appId: "1:90958848108:web:9f881bf762fde111bc7849"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore;
const auth = firebase.auth();


export { auth };

export default db;