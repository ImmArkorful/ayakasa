/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import PropTypes from 'prop-types'

// components
import './App.css'
import i18n from './i18n'

// styles
import 'normalize.css'

// pages
import { Home } from './pages'

// context
import { AuthContext, ThemeContext } from './context'

const AppProvider = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.ProviderWrapper>
        <AuthContext.ProviderWrapper>{children}</AuthContext.ProviderWrapper>
      </ThemeContext.ProviderWrapper>
    </I18nextProvider>
  )
}

AppProvider.propTypes = { children: PropTypes.element.isRequired }

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

export default App
