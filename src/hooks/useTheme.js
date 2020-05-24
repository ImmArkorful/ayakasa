import { useContext } from 'react'

// Context
import { ThemeContext } from '../context'

// theme
import theme from '../theme'

const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  return { themeContext, theme }
}

export default useTheme
