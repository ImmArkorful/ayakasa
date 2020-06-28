import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, Description, NumberInput } from './common'

const ProvideNumber = ({
  primaryFont,
  validatePhoneNumber,
  phoneNumValid,
  setPhoneNumber,
  phoneNumber,
  setTermsAgreed,
  countryCode,
  setCountryCode,
}) => {
  const termsCheckBox = useRef()

  const [termsAgreedLoacal, setTermsAgreedLoacal] = useState(true)

  return (
    <InnerHolderNumber>
      <HeadMSG font={primaryFont}>
        <Trans>provide_number_head_msg</Trans>
      </HeadMSG>
      <NumberBox>
        <NumberInput
          size={4}
          maxLength={4}
          contentEditable={false}
          type="text"
          value={countryCode}
          margin="15px 0px 15px 15px"
          font={primaryFont}
          onChange={() => {
            setCountryCode('+233')
          }}
        />
        <NumberInput
          maxLength={10}
          size={10}
          hasError={!phoneNumValid}
          type="text"
          font={primaryFont}
          value={phoneNumber}
          onChange={(e) => {
            const number = e.target.value.replace(/[^0-9]/g, '')
            setPhoneNumber(number)
          }}
        />
      </NumberBox>
      <Description font={primaryFont}>
        <Trans>provide_number_description</Trans>
      </Description>
      <RecaptchaHolder id="recaptcha-container" />
      <ActionButton
        id="send-code"
        font={primaryFont}
        onClick={() => {
          validatePhoneNumber()
          if (!termsCheckBox.current.checked) setTermsAgreedLoacal(false)
        }}
      >
        <Trans>next</Trans>
      </ActionButton>
      <PrivacyHolder>
        <Note
          font={primaryFont}
          htmlFor="terms"
          color={termsAgreedLoacal ? 'black' : 'red'}
        >
          <Trans>privacy_policy</Trans>
        </Note>
        <AgreeCheck
          type="checkbox"
          id="terms"
          ref={termsCheckBox}
          onChange={(e) => {
            setTermsAgreed(e.target.checked)
            setTermsAgreedLoacal(e.target.checked)
          }}
        />
      </PrivacyHolder>
    </InnerHolderNumber>
  )
}

const RecaptchaHolder = styled.div`
  margin: 15px;
  justify-self: center;
`

const NumberBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`

const Note = styled.label`
  font-family: ${({ font }) => font};
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

const InnerHolderNumber = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
`

ProvideNumber.defaultProps = { phoneNumValid: true }

export default withTranslation()(ProvideNumber)

ProvideNumber.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  validatePhoneNumber: PropTypes.func.isRequired,
  setTermsAgreed: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setCountryCode: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  phoneNumValid: PropTypes.bool,
}
