import React from 'react'
import { withTranslation } from 'react-i18next'
import styled from 'styled-components'

// hooks
// import { useTheme, useAuth } from '../../hooks'

const Dashboard = () => {
  // const { themeContext, theme } = useTheme()
  // const { authContext } = useAuth()

  // const { signOut, signIn } = authContext

  // const primaryFont = theme[themeContext.activeTheme]?.fonts.primary

  return (
    <MainHolder>
      {/* <Header font={primaryFont}> send sms for free!</Header>
      <Description font={primaryFont}>
        SEND, SAVE AND MANAGE YOUR CONTACTS, ALL IN ONE PLACE.
      </Description>
      <SubMessage font={primaryFont}>
        <Trans>paragraph</Trans>
      </SubMessage>
      <button
        id="sign-in-button"
        type="submit"
        onClick={signIn}
        style={{
          fontFamily: primaryFont,
          fontSize: 18,
          color: '#4F5EB2',
          width: 300,
        }}
      >
        sign in
      </button>
      <button
        type="submit"
        onClick={signOut}
        style={{
          fontFamily: primaryFont,
          fontSize: 18,
          color: '#4F5EB2',
          width: 300,
        }}
      >
        sign out
      </button> */}
    </MainHolder>
  )
}

export default withTranslation()(Dashboard)

const MainHolder = styled.div`
  display: grid;
`

// const Description = styled.p`
//   font-family: ${(props) => props.font};
//   font-size: 18px;
//   color: #4f5eb2;
// `

// const SubMessage = styled.p`
//   font-family: ${(props) => props.font};
// `

// const Header = styled.h1`
//   font-size: 80px;
//   color: blue;
//   font-family: ${(props) => props.font};
// `
