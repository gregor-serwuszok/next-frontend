import { NextPage } from "next"
import Head from "next/head"
import { useContext } from "react"
import AppBar from "../components/appBar"
import Login from "../components/logIn"
import Product from "../components/product"
import { AuthContext } from "../context/auth"
import { ConfigContext } from "../context/configuration"
import { ProductContextProvider } from "../context/product"

const Products: NextPage = () => {

  const { auth } = useContext(AuthContext)
  const { user } = useContext(ConfigContext)

  const configLoaded =
    user.product
    && user.product.presentation
    && user.product.roles

  return (
    <>
      {auth
        ?
        configLoaded
          ?
          <>
            <Head>
              <title>Products</title>
              <meta name="description" content="Products" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar />
            <ProductContextProvider>
              <Product />
            </ProductContextProvider>
          </>
          :
          <h1>laoding</h1>
        :
        <Login />
      }
    </>
  )
}

export default Products