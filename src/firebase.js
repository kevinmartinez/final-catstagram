import firebase from 'firebase/app'
import 'firebase/auth/dist/index.cjs'
import 'firebase/database/dist/index.cjs'
import 'firebase/storage/dist/index.cjs'

export const config = {
  apiKey: 'AIzaSyDtzwWh77yGQqipD9KnFDT8gt2L4bNDUSY',
  authDomain: 'catstagram-app.firebaseapp.com',
  databaseURL: 'https://catstagram-app.firebaseio.com',
  projectId: 'catstagram-app',
  storageBucket: 'catstagram-app.appspot.com',
  messagingSenderId: '979647683682',
}

export const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database() // the real-time database
export const auth = firebaseApp.auth()
export const storage = firebaseApp.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const emailAuthProvider = new firebase.auth.EmailAuthProvider()
export const commentsRef = db.ref('comments')
export const postsRef = db.ref('posts')
