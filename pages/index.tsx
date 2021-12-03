import Dialog from "@reach/dialog";
import type { NextPage } from "next";
import Head from "next/head";
import { Modal } from "../components/ui/Modal/Modal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>a11yinyerface</title>
        <meta
          name="description"
          content="A worst-practice accessibility experiment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      a11yinyerface
      <Modal isOpen>Welcome to a11yinyerface!</Modal>
    </div>
  );
};

export default Home;
