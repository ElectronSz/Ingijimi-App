import firebase from 'firebase'

var config = {
        apiKey: "AIzaSyCyszd3n2HQ2OPEkM540Nx63HZ9r_YbdPg",
        authDomain: "gijima-d4989.firebaseapp.com",
        databaseURL: "https://gijima-d4989.firebaseio.com",
        projectId: "gijima-d4989",
        storageBucket: "gijima-d4989.appspot.com",
        messagingSenderId: "126091146954",
        appId: "1:126091146954:web:ad246d7a8d8070db28e633"

};
firebase.initializeApp(config);
const db = firebase.firestore()
const auth = firebase.auth()
const file = firebase.storage()


export { db, auth, file }