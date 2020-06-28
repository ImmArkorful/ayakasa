import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'
import PropTypes from 'prop-types'

// compoonents
import { HeadMSG, ActionButton, NumberInput } from './common'

const BasicInfo = ({
  primaryFont,
  saveUserData,
  validateEmail,
  nameValid,
  emailValid,
  setNameValid,
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [emailValidLo, setEmailValidLo] = useState(true)
  const [nameValidLo, setNameValidLo] = useState(true)

  const [saveData, setSaveData] = useState(false)

  useEffect(() => {
    if (emailValid && nameValid) {
      saveUserData(name, email)
    }
  }, [emailValid, nameValid, name, email, saveUserData])

  useEffect(() => {
    if (!saveData) return

    if (!emailValid) setEmailValidLo(false)
    if (!nameValid) setNameValidLo(false)
  }, [emailValid, nameValid, saveData])

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
          maxLength={8}
          hasError={!nameValidLo}
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
          hasError={!emailValidLo}
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
          validateEmail(email)
          if (name.length >= 2) setNameValid(true)

          setSaveData(true)
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
  validateEmail: PropTypes.func.isRequired,
  nameValid: PropTypes.bool.isRequired,
  emailValid: PropTypes.bool.isRequired,
  setNameValid: PropTypes.func.isRequired,
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
