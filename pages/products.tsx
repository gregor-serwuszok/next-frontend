import { NextPage } from "next"
import Head from "next/head"
import { useContext } from "react"
import AppBar from "../src/components/appBar"
import Login from "../src/components/logIn"
import Pagination from "../src/components/pagination"
import Product from "../src/components/product"
import { AuthContext } from "../src/context/auth"
import { ConfigContext } from "../src/context/configuration"
import { ProductContextProvider } from "../src/context/product"

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
              <Pagination entity="product" />
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