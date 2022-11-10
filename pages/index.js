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
        <meta name="robots" content="follow, index" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eugene Goh" />
        <meta property="og:title" content="Eugene Goh" />
        <meta property="og:image" content="../public/ogimage.png" />
        <meta
          name="description"
          property="og:description"
          content="Hey! I'm Eugene Goh, a 18 y/o Software Engineer based in Kuala Lumpur 🇲🇾, specializing in JavaScript, GraphQL, and Web3 technologies. Welcome to my digital garden where I share what I'm learning about shipping impactful products, becoming a better engineer and growing a career in tech."
        />
        <meta
          name="keywords"
          content="Eugene Goh, Software Engineer, JavaScript, Web3, JS, GraphQL, software, technology, code, coding"
        />
        <meta name="theme-color" content="#13111A" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
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
