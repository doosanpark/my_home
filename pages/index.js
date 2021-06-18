import Head from 'next/head'
import Login from './login'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login></Login>
      </main>

      <footer>

      </footer>

    </div>
  )
}
