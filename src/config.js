import firebase from 'firebase'

var config = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId
    
};
firebase.initializeApp(config);
const db = firebase.firestore()
const auth = firebase.auth()
const file = firebase.storage()


export { db, auth, file }