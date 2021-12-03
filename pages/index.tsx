import Dialog from "@reach/dialog";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/ui/Button/Button";
import { Input } from "../components/ui/Input/Input";
import { Modal } from "../components/ui/Modal/Modal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Welcome to a11yinyerface!
      </Modal>
      <form>
        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Home;
