import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext({})

const Provider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState('ayasun')

  function changeTheme(theme) {
    setActiveTheme(theme)
  }

  async function getTheme() {
    try {
      const value = localStorage.getItem('theme')
      if (value !== null) {
        setActiveTheme(value)
      } else {
        setActiveTheme('ayasun')
      }
    } catch (e) {
      setActiveTheme('ayasun')
    }
  }
  async function saveTheme(theme) {
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      setActiveTheme('ayasun')
    }
  }

  useEffect(() => {
    getTheme()
  }, [])

  return (
    <ThemeContext.Provider value={{ activeTheme, changeTheme, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContext.ProviderWrapper = Provider

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContext
