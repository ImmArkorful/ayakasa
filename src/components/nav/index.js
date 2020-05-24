import React from 'react'

// hooks
import { useTheme } from '../../hooks'

export default () => {
  const { themeContext, theme } = useTheme()

  return (
    <p
      style={{
        textAlign: 'center',
        fontFamily: theme[themeContext.activeTheme]?.fonts.primary,
        backgroundColor: '#F7E3DC',
        padding: 20,
      }}
    >
      HOME ABOUT CONTACT
    </p>
  )
}
