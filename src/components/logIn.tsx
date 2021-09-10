import { Button } from "@material-ui/core"
import { FC, useContext } from "react"
import { AuthContext } from "../context/auth"
import Head from "next/head"

const Login: FC = () => {

  const { auth, authorize } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login Form</h1>
      <Button onClick={() => authorize()}>Login</Button>
    </>
  )
}

export default Login