import React, { useRef } from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, Description, NumberInput } from './common'

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

const RecaptchaHolder = styled.div`
  margin: 15px;
  justify-self: center;
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

const InnerHolderNumber = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
`

export default withTranslation()(ProvideNumber)

ProvideNumber.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  validatePhoneNumber: PropTypes.func.isRequired,
  setTermsAgreed: PropTypes.func.isRequired,
  termsAgreed: PropTypes.bool.isRequired,
}
