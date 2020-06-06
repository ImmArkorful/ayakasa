/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// components
import './App.css'
import i18n from './i18n'
import NavBar from './components/nav'

// styles
import 'normalize.css'

// pages
import { Home, About, Contact } from './pages'

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
      <AppRouter />
    </AppProvider>
  )
}

function AppRouter() {
  return (
    <Body>
      <Router>
        <MainHolder>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <NavBar />
        </MainHolder>
      </Router>
    </Body>
  )
}

export default App

const Body = styled.div`
  display: grid;
  grid-tempelate-rows: 1fr;
  height: 100vh;
`

const MainHolder = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: #e8edef;
  padding: 20px;
`
