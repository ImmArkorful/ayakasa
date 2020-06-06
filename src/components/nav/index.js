import React from 'react'
import styled from 'styled-components'

// hooks
import { useTheme } from '../../hooks'

export default () => {
  const { themeContext, theme } = useTheme()

  const fontFamily = theme[themeContext.activeTheme]?.fonts.primary

  return <Menu font={fontFamily}>HOME ABOUT CONTACT</Menu>
}

const Menu = styled.p`
  text-align: center;
  font-family: ${(props) => props.font};
  padding: 10px;
`
