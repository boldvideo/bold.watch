import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bold Video</title>
        <meta name="description" content="Bold Video" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This page has intentionally been left blank.
        </h1>

      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
