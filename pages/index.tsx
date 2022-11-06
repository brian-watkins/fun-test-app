import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((counter + 1) % 5)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fun Test App!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to this awesome app!
        </h1>
        <button onClick={handleClick}>Click me!</button>
        <div data-counter-text>You clicked {counter} times!</div>
      </main>
    </div>
  )
}
