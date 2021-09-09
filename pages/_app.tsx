
import type { AppProps } from "next/app"
import { CssBaseline } from "@material-ui/core"
import { AuthContextProvider } from "../context/auth"
import { ConfigContextProvider } from "../context/configuration"
import AppBar from "../components/appBar"
import { PaginationContextProvider } from "../context/pagination"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigContextProvider>
      <AuthContextProvider>
        <CssBaseline>
          <PaginationContextProvider>
            <Component {...pageProps} />
          </PaginationContextProvider>
        </CssBaseline>
      </AuthContextProvider>
    </ConfigContextProvider>
  )
}

export default App
