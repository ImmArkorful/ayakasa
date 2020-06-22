import React, { useState } from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, NumberInput } from './common'

const BasicInfo = ({ primaryFont, saveUserData }) => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)

  return (
    <InnerHolderVerify>
      <HeadMSG font={primaryFont}>
        <Trans>user_info_description</Trans>
      </HeadMSG>

      <>
        <Label font={primaryFont}>
          <Trans>name</Trans>
        </Label>
        <NumberInput
          type="text"
          font={primaryFont}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </>
      <>
        <Label font={primaryFont}>
          <Trans>email</Trans>
        </Label>
        <NumberInput
          type="text"
          font={primaryFont}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </>

      <ActionButton
        id="sign-in-button"
        font={primaryFont}
        onClick={() => {
          saveUserData(name, email)
        }}
      >
        <Trans>done</Trans>
      </ActionButton>
    </InnerHolderVerify>
  )
}

BasicInfo.propTypes = {
  primaryFont: PropTypes.string.isRequired,
  saveUserData: PropTypes.func.isRequired,
}

export default withTranslation()(BasicInfo)

const InnerHolderVerify = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto 1fr;
`

const Label = styled.p`
  font-family: ${(props) => props.font};
  margin: 0px;
  margin-left: 15px;
  line-height: 18px;
`
