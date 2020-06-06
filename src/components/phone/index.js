import React from 'react'
import styled from 'styled-components'

// context
import { useTheme } from '../../hooks'

// assets
const LogoImage = require('../../assets/images/logo.png')

export default () => {
  const { themeContext, theme } = useTheme()

  const primaryFont = theme[themeContext.activeTheme]?.fonts.primary

  return (
    <MainHolder>
      <Logo alt="Logo" src={LogoImage} />
      <HeadMSG font={primaryFont}>Enter your Phone Number</HeadMSG>
      <NumberInput type="number" font={primaryFont} />
      <Description font={primaryFont}>
        A code will be sent to this number to veriify your identity
      </Description>
      <ActionButton font={primaryFont}>Next</ActionButton>
      <Note font={primaryFont}>Privacy Policy</Note>
    </MainHolder>
  )
}

const MainHolder = styled.div`
  display: grid;
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

const HeadMSG = styled.h1`
  text-align: center;
  font-family: ${(props) => props.font};
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
`

const ActionButton = styled.button`
  margin: 15px;
  font-family: ${(props) => props.font};
  padding: 8px;
  border-radius: 5px;
`

const Note = styled.p`
  font-family: ${(props) => props.font};
  margin-top: 2px;
  text-align: center;
  font-size: 11px;
  line-height: 16px;
`
