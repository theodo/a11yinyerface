import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>a11yinyerface</title>
        <meta name="description" content="A worst-practice accessibility experiment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      a11yinyerface
    </div>
  )
}

export default Home
