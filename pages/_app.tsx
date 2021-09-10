
import type { AppProps } from "next/app"
import { CssBaseline } from "@material-ui/core"
import { AuthContextProvider } from "../src/context/auth"
import { ConfigContextProvider } from "../src/context/configuration"
import { PaginationContextProvider } from "../src/context/pagination"
import { FormContextProvider } from "../src/context/form"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigContextProvider>
      <AuthContextProvider>
        <CssBaseline>
          <FormContextProvider>
            <PaginationContextProvider>
              <Component {...pageProps} />
            </PaginationContextProvider>
          </FormContextProvider>
        </CssBaseline>
      </AuthContextProvider>
    </ConfigContextProvider>
  )
}

export default App
