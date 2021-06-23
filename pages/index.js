import Head from 'next/head'
import Home from './home'

export default function index() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home></Home>
      </main>

      <footer>

      </footer>

    </div>
  )
}
