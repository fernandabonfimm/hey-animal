import * as firebase from 'firebase/app'
import 'firebase/auth'

const Api = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderID: process.env.REACT_APP_FIREBASE_SENDER_ID
})
export default Api;