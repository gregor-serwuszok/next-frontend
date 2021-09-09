import { Button } from "@material-ui/core"
import Link from "next/link"
import { FC, useContext } from "react"
import { AuthContext } from "../context/auth"

const AppBar: FC = () => {

  const { auth, authorize, clearAuth } = useContext(AuthContext)

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      {auth
        ?
        <Button onClick={() => clearAuth()}>Logout</Button>
        :
        <Button onClick={() => authorize()}>Login</Button>
      }

    </>
  )
}

export default AppBar
