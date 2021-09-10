import { createContext, FC, useState } from "react"
import axios from "axios"
import { Userconfig } from "../types/userConfig"

type ConfigContextState = {
  user: Userconfig,
  app: any
  fetchUserConfig: () => void
  clearConfig: () => void
}

const initial: ConfigContextState = {
  user: {} as Userconfig,
  app: {},
  fetchUserConfig: () => { },
  clearConfig: () => { }
}

export const ConfigContext = createContext<ConfigContextState>(initial)

export const ConfigContextProvider: FC = ({ children }) => {

  const [state, setState] = useState<ConfigContextState>(initial)

  const fetchUserConfig = async () => {

    try {
      const responseUser = await axios({
        method: "GET",
        url: `${process.env.API_BASE_URL}config/user`,
        data: {}
      })
      setState({
        ...state,
        user: responseUser.data
      })
    }
    catch (error) {
      console.log("bldfsfa")
    }
  }

  const clearConfig = () => {
    setState(initial)
  }

  ConfigContext.displayName = "Config"

  return (
    <ConfigContext.Provider
      value={{
        user: state.user,
        app: state.app,
        fetchUserConfig,
        clearConfig
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}