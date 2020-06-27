import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase/app'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

// firebase
import app, { db } from '../base'

const AuthContext = createContext({})

const Provider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+233')
  const [otpCode, setOtpCode] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [userVerified, setUserVerified] = useState(false)
  const [infoSaved, setInfoSaved] = useState(false)
  const [phoneNumValid, setPhoneNumValid] = useState(true)
  const [verfyThisNumber, setVerfyThisNumber] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)

  function verifyCode() {
    window.confirmationResult
      .confirm(otpCode)
      .then((result) => {
        const { user } = result
        setCurrentUser(user)
        setUserVerified(true)
        localStorage.setItem('userVerified', 'true')

        if (!result.additionalUserInfo.isNewUser) {
          setInfoSaved(true)
          localStorage.setItem('infoSaved', 'true')
        }
      })
      .catch(() => {})
  }

  function onSignInSubmit() {
    const appVerifier = window.recaptchaVerifier

    firebase
      .auth()
      .signInWithPhoneNumber(verfyThisNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        setOtpSent(true)
      })
      .catch((e) => {
        console.error(e)
      })
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
    const parsedPhoneNumber = parsePhoneNumberFromString(
      `${countryCode}${phoneNumber}`
    )

    if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
      if (!termsAgreed) return
      setVerfyThisNumber(parsedPhoneNumber.number)
      setPhoneNumValid(true)
    } else {
      setPhoneNumValid(false)
    }
  }

  function saveUserData(name, email) {
    db.collection(`users`)
      .doc(currentUser.uid)
      .set({
        name,
        email,
      })
      .then(() => {
        setInfoSaved(true)
        localStorage.setItem('infoSaved', 'true')
      })
      .catch((error) => {
        console.error('Error adding document: ', error)
      })
  }

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(async () => {
        setCurrentUser(null)
        setOtpSent(false)
        setUserVerified(false)
        setInfoSaved(false)
        setPhoneNumber('')

        localStorage.clear()

        setTermsAgreed(false)
        setPhoneNumValid(true)

        setVerfyThisNumber('')
      })
      .catch(() => {
        // An error happened.
      })
  }

  useEffect(() => {
    app.auth().useDeviceLanguage()

    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    const userVerifiedLo = Boolean(localStorage.getItem('userVerified'))
    setUserVerified(userVerifiedLo)

    const infoSavedLo = Boolean(localStorage.getItem('infoSaved'))
    setInfoSaved(infoSavedLo)
  }, [])

  useEffect(() => {
    if (verfyThisNumber !== '' || (termsAgreed && phoneNumValid))
      setUpRecaptchaVerifier()
  }, [verfyThisNumber])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        saveUserData,
        signOut,
        phoneNumber,
        setPhoneNumber,
        setOtpCode,
        otpSent,
        validatePhoneNumber,
        onSignInSubmit,
        verifyCode,
        userVerified,
        infoSaved,
        countryCode,
        setCountryCode,
        phoneNumValid,
        termsAgreed,
        setTermsAgreed,
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
