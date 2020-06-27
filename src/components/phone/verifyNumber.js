import React from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, Description, NumberInput } from './common'

const VerifyNumber = ({
  primaryFont,
  setOtpCode,
  verifyCode,
  otpCode,
  codeValid,
}) => {
  const verifyDescription = 'verify_number_description'
  const errorMessage = 'code_error_message'
  return (
    <InnerHolderVerify>
      <HeadMSG font={primaryFont}>
        <Trans>verify_number_head_msg</Trans>
      </HeadMSG>
      <NumberInput
        hasError={!codeValid}
        maxLength={6}
        type="text"
        font={primaryFont}
        value={otpCode}
        onChange={(e) => {
          const code = e.target.value.replace(/[^0-9]/g, '')
          setOtpCode(code)
        }}
      />
      <Description font={primaryFont}>
        <Trans>{codeValid ? verifyDescription : errorMessage}</Trans>
      </Description>
      {otpCode.length === 6 && (
        <ActionButton
          id="sign-in-button"
          font={primaryFont}
          onClick={() => {
            verifyCode()
          }}
        >
          <Trans>next</Trans>
        </ActionButton>
      )}
    </InnerHolderVerify>
  )
}

const InnerHolderVerify = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
`

VerifyNumber.defaultProps = { otpCode: '' }

export default withTranslation()(VerifyNumber)

VerifyNumber.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  setOtpCode: PropTypes.func.isRequired,
  verifyCode: PropTypes.func.isRequired,
  otpCode: PropTypes.string,
  codeValid: PropTypes.bool.isRequired,
}
