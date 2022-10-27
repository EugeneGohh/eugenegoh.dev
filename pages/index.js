import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eugene Goh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <About />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
