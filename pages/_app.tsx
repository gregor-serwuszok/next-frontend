
import type { AppProps } from "next/app"
import { CssBaseline } from "@material-ui/core"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CssBaseline>
      <Component {...pageProps} />
    </CssBaseline>

  )
}

export default App
