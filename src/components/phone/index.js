import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// context
import { useTheme, useAuth } from '../../hooks'

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
  } = authContext

  const primaryFont = theme[themeContext.activeTheme]?.fonts.primary

  const [termsAgreed, setTermsAgreed] = useState(true)

  return (
    <MainHolder>
      <Logo alt="Logo" src={LogoImage} />
      {otpSent === false ? (
        <ProvideNumber
          primaryFont={primaryFont}
          setPhoneNumber={setPhoneNumber}
          validatePhoneNumber={validatePhoneNumber}
          setTermsAgreed={setTermsAgreed}
          termsAgreed={termsAgreed}
        />
      ) : (
        <VerifyNumber
          primaryFont={primaryFont}
          setOtpCode={setOtpCode}
          verifyCode={verifyCode}
        />
      )}
    </MainHolder>
  )
}

export default withTranslation()(Phone)

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

const HeadMSG = styled.h3`
  text-align: center;
  font-family: ${(props) => props.font};
  margin: 15px;
  line-height: 30px;
`

const NumberInput = styled.input`
  font-family: ${(props) => props.font};
  height: 35px;
  margin: 15px;
  border-radius: 5px;
`

const Description = styled.p`
  font-family: ${(props) => props.font};
  margin-top: 2px;
  text-align: center;
  font-size: 13px;
  line-height: 16px;
  margin: 15px;
`

const ActionButton = styled.button`
  margin: 15px;
  font-family: ${(props) => props.font};
  padding: 8px;
  border-radius: 5px;
  height: 40px;
  align-self: flex-end;
  margin-bottom: 20px;
`

const Note = styled.label`
  font-family: ${(props) => props.font};
  font-size: 11px;
  line-height: 16px;
  margin: 0px;
  color: ${(props) => props.color};
`

const PrivacyHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 0px 20px 30px 20px;
`

const AgreeCheck = styled.input``

const RecaptchaHolder = styled.div`
  margin: 15px;
  justify-self: center;
`

const InnerHolderNumber = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
`

const InnerHolderVerify = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
`

const ProvideNumber = ({
  primaryFont,
  validatePhoneNumber,
  setPhoneNumber,
  termsAgreed,
  setTermsAgreed,
}) => {
  const termsCheckBox = useRef()

  return (
    <InnerHolderNumber>
      <HeadMSG font={primaryFont}>
        <Trans>provide_number_head_msg</Trans>
      </HeadMSG>
      <NumberInput
        type="text"
        font={primaryFont}
        onChange={(e) => {
          setPhoneNumber(e.target.value)
        }}
      />
      <Description font={primaryFont}>
        <Trans>provide_number_description</Trans>
      </Description>
      <RecaptchaHolder id="recaptcha-container" />
      <ActionButton
        id="send-code"
        font={primaryFont}
        onClick={() => {
          if (termsCheckBox.current.checked) {
            validatePhoneNumber()
          } else {
            setTermsAgreed(false)
          }
        }}
      >
        <Trans>next</Trans>
      </ActionButton>
      <PrivacyHolder>
        <Note
          font={primaryFont}
          htmlFor="terms"
          color={termsAgreed ? 'black' : 'red'}
        >
          <Trans>privacy_policy</Trans>
        </Note>
        <AgreeCheck
          type="checkbox"
          id="terms"
          ref={termsCheckBox}
          onChange={(e) => {
            setTermsAgreed(e.target.checked)
          }}
        />
      </PrivacyHolder>
    </InnerHolderNumber>
  )
}

ProvideNumber.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  validatePhoneNumber: PropTypes.func.isRequired,
  setTermsAgreed: PropTypes.func.isRequired,
  termsAgreed: PropTypes.bool.isRequired,
}

const VerifyNumber = ({ primaryFont, setOtpCode, verifyCode }) => {
  return (
    <InnerHolderVerify>
      <HeadMSG font={primaryFont}>
        <Trans>verify_number_head_msg</Trans>
      </HeadMSG>
      <NumberInput
        type="text"
        font={primaryFont}
        onChange={(e) => {
          setOtpCode(e.target.value)
        }}
      />
      <Description font={primaryFont}>
        <Trans>verify_number_description</Trans>
      </Description>
      <RecaptchaHolder id="recaptcha-container" />
      <ActionButton
        id="sign-in-button"
        font={primaryFont}
        onClick={() => {
          verifyCode()
        }}
      >
        <Trans>done</Trans>
      </ActionButton>
    </InnerHolderVerify>
  )
}

VerifyNumber.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  setOtpCode: PropTypes.func.isRequired,
  verifyCode: PropTypes.func.isRequired,
}
