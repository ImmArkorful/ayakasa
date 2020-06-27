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
  const [codeValid, setCodeValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  function verifyCode() {
    setIsLoading(true)

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

        setIsLoading(false)
      })
      .catch(() => {
        setCodeValid(false)
        setIsLoading(false)
      })
  }

  function onSignInSubmit() {
    const appVerifier = window.recaptchaVerifier

    setIsLoading(true)

    firebase
      .auth()
      .signInWithPhoneNumber(verfyThisNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        window.recaptchaVerifier.reset()
        setOtpSent(true)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
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
    setIsLoading(true)

    db.collection(`users`)
      .doc(currentUser.uid)
      .set({
        name,
        email,
      })
      .then(() => {
        setInfoSaved(true)
        localStorage.setItem('infoSaved', 'true')
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }

  function signOut() {
    setIsLoading(true)

    firebase
      .auth()
      .signOut()
      .then(async () => {
        setCurrentUser(null)
        setOtpSent(false)
        setUserVerified(false)
        setInfoSaved(false)
        setPhoneNumber('')

        setCodeValid(true)
        setOtpCode('')

        localStorage.clear()

        setTermsAgreed(false)
        setPhoneNumValid(true)

        setVerfyThisNumber('')

        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }

  useEffect(() => {
    app.auth().useDeviceLanguage()

    app.auth().onAuthStateChanged((user) => {
      if (user === null) {
        signOut()
        return
      }
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
        otpCode,
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
        codeValid,
        isLoading,
        setIsLoading,
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
