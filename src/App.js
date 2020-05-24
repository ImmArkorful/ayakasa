/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { I18nextProvider } from 'react-i18next'

// components
import './App.css'
import i18n from './i18n'

// pages
import { Home } from './pages'

// context
import { AuthContext, ThemeContext } from './context'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.ProviderWrapper>
        <AuthContext.ProviderWrapper>
          <Home />
        </AuthContext.ProviderWrapper>
      </ThemeContext.ProviderWrapper>
    </I18nextProvider>
  )
}

export default App
