import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase/app'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

// config
import app from '../base'

const AuthContext = createContext({})

const Provider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  function signOut() {
    app.auth().signOut()
  }

  function verifyCode() {
    window.confirmationResult
      .confirm(otpCode)
      .then((result) => {
        const { user } = result
        setCurrentUser(user)
      })
      .catch(() => {})
  }

  function onSignInSubmit() {
    const appVerifier = window.recaptchaVerifier

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        setOtpSent(true)
      })
      .catch(() => {})
  }

  function setUpRecaptchaVerifier() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: () => {
          onSignInSubmit()
        },
        'expired-callback': () => {},
      }
    )

    window.recaptchaVerifier.render()
  }

  function validatePhoneNumber() {
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber)

    if (parsedPhoneNumber && parsedPhoneNumber.isValid()) setUpRecaptchaVerifier()
  }

  function signIn() {}

  useEffect(() => {
    app.auth().useDeviceLanguage()

    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signIn,
        signOut,
        setPhoneNumber,
        setOtpCode,
        otpSent,
        validatePhoneNumber,
        onSignInSubmit,
        verifyCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthContext.ProviderWrapper = Provider

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthContext
