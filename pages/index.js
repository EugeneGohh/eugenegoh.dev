import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "./hero";

export default function Home() {
  return (
    <>
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
          property="og:image:secure_url"
          content="https://eugenegoh-dev-revamp.vercel.app/images/ogimage.png"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Eugene Goh, Software Engineer, JavaScript, Web3, JS, GraphQL, software, technology, code, coding"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
      </main>

      <footer></footer>
    </>
  );
}
