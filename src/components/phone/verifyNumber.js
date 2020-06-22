import React from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, Description, NumberInput } from './common'

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
      <ActionButton
        id="sign-in-button"
        font={primaryFont}
        onClick={() => {
          verifyCode()
        }}
      >
        <Trans>next</Trans>
      </ActionButton>
    </InnerHolderVerify>
  )
}

const InnerHolderVerify = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
`

export default withTranslation()(VerifyNumber)

VerifyNumber.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  setOtpCode: PropTypes.func.isRequired,
  verifyCode: PropTypes.func.isRequired,
}
