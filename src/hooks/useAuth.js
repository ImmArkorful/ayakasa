import { useContext } from 'react'

// Context
import { AuthContext } from '../context'

const useAuth = () => {
  const authContext = useContext(AuthContext)

  return { authContext }
}

export default useAuth
