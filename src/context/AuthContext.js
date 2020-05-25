import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase/app'

// config
import app from '../base'

const AuthContext = createContext({})

const Provider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  function signOut() {
    app.auth().signOut()
  }

  function verifyCode(confirmationResult) {
    const code = '123456'
    confirmationResult
      .confirm(code)
      .then((result) => {
        const { user } = result
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function onSignInSubmit() {
    const phoneNumber = '+233547557948'
    const appVerifier = window.recaptchaVerifier
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        verifyCode(confirmationResult)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function setUpRecaptchaVerifier() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        // eslint-disable-next-line no-unused-vars
        callback: (response) => {
          console.log('we e')
          // onSignInSubmit(response)
        },
      }
    )

    onSignInSubmit()
  }

  function signIn() {
    console.log('iin f')
    setUpRecaptchaVerifier()
  }

  useEffect(() => {
    app.auth().useDeviceLanguage()

    // setUpRecaptchaVerifier()

    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContext.ProviderWrapper = Provider

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthContext
