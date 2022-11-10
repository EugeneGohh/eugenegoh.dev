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
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Eugene Goh" />
        <meta property="og:site_name" content="Eugene Goh" />
        <meta
          property="og:description"
          content="Hey! I'm Eugene Goh, a 18 y/o Software Engineer based in Kuala Lumpur 🇲🇾, specializing in JavaScript, GraphQL, and Web3 technologies. Welcome to my digital garden where I share what I'm learning about shipping impactful products, becoming a better engineer and growing a career in tech."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/c93qx1p7/production/58ec167046c874704693721f18e16596090fa9e2-1280x832.png"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Eugene Goh, Software Engineer, JavaScript, Web3, JS, GraphQL, software, technology, code, coding"
        />

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
