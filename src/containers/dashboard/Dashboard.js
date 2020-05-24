import React from 'react'
import { withTranslation, Trans } from 'react-i18next'

// hooks
import { useTheme, useAuth } from '../../hooks'

const Dashboard = () => {
  const { themeContext, theme } = useTheme()
  const { authContext } = useAuth()

  const { signOut, signIn } = authContext

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
        height: '100%',
      }}
    >
      <p
        style={{
          fontSize: 80,
          color: 'blue',
          fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
        }}
      >
        send sms for free!
      </p>
      <p
        style={{
          fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
          fontSize: 18,
          color: '#4F5EB2',
        }}
      >
        SEND, SAVE AND MANAGE YOUR CONTACTS, ALL IN ONE PLACE.
      </p>
      <p
        style={{
          fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
        }}
      >
        <Trans>paragraph</Trans>
      </p>

      <p
        style={{
          fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
        }}
      >
        This is a sentence.
      </p>

      <button
        id="sign-in-button"
        type="submit"
        onClick={signIn}
        style={{
          fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
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
          fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
          fontSize: 18,
          color: '#4F5EB2',
          width: 300,
        }}
      >
        sign out
      </button>
    </div>
  )
}

export default withTranslation()(Dashboard)
