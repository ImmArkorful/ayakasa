import React from 'react'
import styled from 'styled-components'
import { withTranslation, Trans } from 'react-i18next'

// context
import { useTheme } from '../../hooks'

// assets
const LogoImage = require('../../assets/images/logo.png')

const Phone = () => {
  const { themeContext, theme } = useTheme()

  const primaryFont = theme[themeContext.activeTheme]?.fonts.primary

  return (
    <MainHolder>
      <Logo alt="Logo" src={LogoImage} />
      <HeadMSG font={primaryFont}>
        <Trans>provide_number_head_msg</Trans>
      </HeadMSG>
      <NumberInput type="text" font={primaryFont} />
      <Description font={primaryFont}>
        <Trans>provide_number_description</Trans>
      </Description>
      <ActionButton font={primaryFont}>
        <Trans>next</Trans>
      </ActionButton>
      <Note font={primaryFont}>
        <Trans>privacy_policy</Trans>
      </Note>
    </MainHolder>
  )
}

export default withTranslation()(Phone)

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto 1fr auto;
  justify-content: center;
  align-content: flex-start;
  paddinng: 10px;
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
  margin-bottom: 30px;
`

const Note = styled.p`
  font-family: ${(props) => props.font};
  margin-top: 2px;
  text-align: center;
  font-size: 11px;
  line-height: 16px;
`
