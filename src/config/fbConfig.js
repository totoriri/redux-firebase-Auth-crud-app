import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
let config = {
    apiKey: "AIzaSyDPmbON1M40ZzcgVAZTBRTV5V_nv5Sv01A",
    authDomain: "redux-firebase-auth-crud-app.firebaseapp.com",
    databaseURL: "https://redux-firebase-auth-crud-app.firebaseio.com",
    projectId: "redux-firebase-auth-crud-app",
    storageBucket: "redux-firebase-auth-crud-app.appspot.com",
    messagingSenderId: "999469916132",
    appId: "1:999469916132:web:6321859b410abeba35f1f1"
  };
// Initialize Firebase

firebase.initializeApp(config);

firebase.firestore()

export default firebase;