import { createContext, FC, useContext, useEffect, useState } from "react"
import axios from "axios"
import { ConfigContext } from "./configuration"

type AuthContextState = {
  auth: boolean,
  authorize: () => void
  clearAuth: () => void
}

const initial: AuthContextState = {
  auth: false,
  authorize: () => { },
  clearAuth: () => { }
}

export const AuthContext = createContext<AuthContextState>(initial)

export const AuthContextProvider: FC = ({ children }) => {

  const [state, setState] = useState<AuthContextState>(initial)
  const { fetchUserConfig, clearConfig } = useContext(ConfigContext)


  const clearAuth = () => {
    setState(initial)
    clearConfig()
  }

  useEffect(() => {
    if (state.auth === true) fetchUserConfig()
  }, [state.auth])

  const authorize = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.API_BASE_URL}auth/`,
        data: {}
      })
      setState({
        ...state,
        auth: response.data.auth
      })
    }
    catch (error) {
      console.log(error)
    }

  }

  AuthContext.displayName = "Auth"

  return (
    <AuthContext.Provider
      value={{
        auth: state.auth,
        authorize,
        clearAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}