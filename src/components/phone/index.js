import React from 'react'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

// context
import { useTheme, useAuth } from '../../hooks'

// compoonents
import VerifyNumber from './verifyNumber'
import ProvideNumber from './provideNumber'
// eslint-disable-next-line no-unused-vars
import UserInfo from './userInfo'
import BasicInfo from './basicInfo'
import Home from './home'

// assets
const LogoImage = require('../../assets/images/logo.png')

const Phone = () => {
  const { themeContext, theme } = useTheme()

  const { authContext } = useAuth()

  const {
    setPhoneNumber,
    otpSent,
    setOtpCode,
    validatePhoneNumber,
    verifyCode,
    userVerified,
    saveUserData,
    signOut,
    infoSaved,
    phoneNumber,
    countryCode,
    setCountryCode,
    phoneNumValid,
    setTermsAgreed,
    termsAgreed,
  } = authContext

  const primaryFont = theme[themeContext.activeTheme]?.fonts.primary

  return (
    <MainHolder>
      <Logo alt="Logo" src={LogoImage} />

      {!otpSent && !userVerified && (
        <ProvideNumber
          primaryFont={primaryFont}
          setPhoneNumber={setPhoneNumber}
          validatePhoneNumber={validatePhoneNumber}
          termsAgreed={termsAgreed}
          setTermsAgreed={setTermsAgreed}
          phoneNumber={phoneNumber}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          phoneNumValid={phoneNumValid}
        />
      )}

      {otpSent && !userVerified && (
        <VerifyNumber
          primaryFont={primaryFont}
          setOtpCode={setOtpCode}
          verifyCode={verifyCode}
        />
      )}

      {userVerified && !infoSaved && (
        <BasicInfo primaryFont={primaryFont} saveUserData={saveUserData} />
      )}

      {infoSaved && <Home primaryFont={primaryFont} signOut={signOut} />}
    </MainHolder>
  )
}

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-content: flex-start;
  paddinng: 10px 10px 15px 10px;
`

const Logo = styled.img`
  height: 100px;
  justify-self: center;
  width: 100px;
  margin: 5px;
`

export default withTranslation()(Phone)

Phone.propTypes = {}
