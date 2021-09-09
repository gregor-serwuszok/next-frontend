import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useContext } from "react"
import AppBar from "../components/appBar"
import Login from "../components/logIn"
import { AuthContext } from "../context/auth"

const Home: NextPage = () => {

  const { auth } = useContext(AuthContext)

  return (
    <>
      {auth ?
        <div>
          <Head>
            <title>Home</title>
            <meta name="description" content="Home" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppBar />
          <h1>Hello Home</h1>
        </div>
        :
        <Login />

      }
    </>

  )
}

export default Home
