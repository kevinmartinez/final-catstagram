import React from 'react'
import { connect } from 'react-redux'
import { createUser, loginEmail, firebaseError } from '../actions/auth'
import CreateUserForm from './CreateUserForm'
import EmailLoginForm from './EmailLoginForm'

const Login = ({ dispatch, googleLogin }) => (
  <div className="container">
    <button onClick={googleLogin}>Login with Google Account</button>
    <div>
      <h2>Are you not registered=</h2>
      <CreateUserForm
        onSubmitUser={(email, password) => {
          dispatch(createUser(email, password))
        }}
      />
    </div>
    <h2>Login with EMAIL</h2>
    <div>
      <EmailLoginForm
        onSubmitLogin={(email, password) => {
          dispatch(loginEmail(email, password))
        }}
      />
    </div>
    <p>Error</p>
  </div>
)

// console.log(actions.firebaseError)

export default connect(undefined)(Login)
