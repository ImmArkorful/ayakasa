import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next'

// hooks
import { useTheme } from '../../hooks'

const NavBar = () => {
  const { themeContext, theme } = useTheme()

  const fontFamily = theme[themeContext.activeTheme]?.fonts.primary

  return (
    <MainHolder>
      <Link to="/">
        <Menu font={fontFamily}>
          <Trans>home</Trans>
        </Menu>
      </Link>
      <Link to="/about">
        <Menu font={fontFamily}>
          <Trans>about</Trans>
        </Menu>
      </Link>
      <Link to="/contact">
        <Menu font={fontFamily}>
          <Trans>contact</Trans>
        </Menu>
      </Link>
    </MainHolder>
  )
}

export default withTranslation()(NavBar)

const MainHolder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  justify-content: center;
`

const Menu = styled.p`
  text-align: center;
  font-family: ${(props) => props.font};
  padding: 10px;
`
