import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'ayakasa-53965.firebaseapp.com',
  databaseURL: 'https://ayakasa-53965.firebaseio.com',
  projectId: 'ayakasa-53965',
  storageBucket: 'ayakasa-53965.appspot.com',
  messagingSenderId: '875007299942',
  appId: '1:875007299942:web:91165ab5b52d1db75ff8a7',
  measurementId: 'G-SRLQZ13FPG',
})

const db = firebase.firestore()

export default app

export { db }
