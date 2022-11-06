import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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
        <button>Click me!</button>
        <div data-counter-text>You clicked 0 times!</div>
      </main>
    </div>
  )
}
