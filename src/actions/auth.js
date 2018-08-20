import { auth, googleAuthProvider } from '../firebase'

const _createUser = resp => ({
  type: 'CREATE_USER',
  user: resp,
})

export const createUser = (email, password) => dispatch => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(resp => dispatch(_createUser(resp)))
    .catch(error => dispatch({ type: 'ERROR', error: error.message }))
}

export const loginSuccess = resp => ({
  type: 'EMAIL_LOGIN',
  user: resp,
})

export const firebaseError = error => ({
  type: 'FIREBASE_ERROR',
  error,
})

export const loginEmail = (email, pass) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, pass)
    .then(resp => dispatch(loginSuccess(resp)))
    .catch(error => dispatch(firebaseError(error)))
}

export const login = uid => ({
  type: 'LOGIN',
  uid,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const googleLogin = () => () => auth.signInWithPopup(googleAuthProvider)

export const firebaseLogout = () => () => auth.signOut()
