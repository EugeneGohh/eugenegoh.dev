import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Container, Flex, Divider, Box, Heading, Text } from "@chakra-ui/react";
import HorizontalCard from "../components/HorizontalCard";
import MultipleCards from "../components/MultipleCards";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import groq from "groq";
import { sanityClient } from "../lib/sanity";

const workExperienceQuery = groq`*[_type == "workExperience"] | order(_createdAt desc) {
  companyName, 
  roleName, 
  endingDate,
  startingDate,
  blockEditor
}`;

export default function Home({ workExperience }) {
  const workExperienceData = workExperience;

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

        <Container maxW="4xl">
          <section className="mx-auto my-16 flex flex-col justify-start gap-8 sm:my-32 sm:max-w-xl md:max-w-3xl md:justify-center lg:my-16 lg:max-w-5xl">
            <p className="flex flex-col text-[11vw] font-extrabold leading-none tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-center">
                {`Student.`}
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center sm:text-left">
                {`Developer.`}
              </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-center sm:text-right">
                {`Builder.`}
              </span>
            </p>
          </section>

          <section>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box py="2">
                <Heading as="h3" size="lg" noOfLines={1}>
                  {`Hi! I'm Eugene Goh`}
                </Heading>
              </Box>
            </Flex>

            <Divider orientation="horizontal" my={3} />

            <Text>
              {`I'm a 18 y/o self-taught software engineer, actively working with TypeScript, GraphQL, and Cloud technologies.`}
              <br />
              <Link
                href="/about"
                className="text-blue-500 underline decoration-from-font [text-underline-position:under]"
              >
                {`Read more →`}
              </Link>
            </Text>

            <div className="h-12"></div>
          </section>

          <section>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box py="2">
                <Heading as="h3" size="lg" noOfLines={1}>
                  {`Where I've Worked`}
                </Heading>
              </Box>
            </Flex>

            <Divider orientation="horizontal" my={3} />

            <ol className="relative mt-6 ml-6 border-l border-zinc-400">
              {workExperienceData.map((item) => {
                return (
                  <>
                    <Timeline
                      roleName={item.roleName}
                      companyName={item.companyName}
                      startingDate={item.startingDate}
                      endingDate={item.endingDate}
                      blockEditor={item.blockEditor}
                    />
                  </>
                );
              })}
            </ol>

            <div className="h-12"></div>
          </section>

          <section>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box py="2">
                <Heading as="h3" size="lg" noOfLines={1}>
                  {`Noteworthy Projects`}
                </Heading>
              </Box>
            </Flex>

            <Divider orientation="horizontal" my={3} />

            {Array.from(Array(1)).map((_, index) => (
              <div key={index}>
                <MultipleCards />
              </div>
            ))}

            <div className="h-12"></div>
          </section>

          <section>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box py="2">
                <Heading as="h3" size="lg" noOfLines={1}>
                  {`Blog Posts`}
                </Heading>
              </Box>
            </Flex>

            <Divider orientation="horizontal" my={3} />

            {Array.from(Array(2)).map((_, index) => (
              <div key={index}>
                <HorizontalCard />
              </div>
            ))}

            <div className="h-12"></div>
          </section>

          <section>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box py="2">
                <Heading as="h3" size="lg" noOfLines={1}>
                  {`Hackathons`}
                </Heading>
              </Box>
            </Flex>

            <Divider orientation="horizontal" my={3} />

            {Array.from(Array(1)).map((_, index) => (
              <div key={index}>
                <HorizontalCard />
              </div>
            ))}

            <div className="h-12"></div>
          </section>
        </Container>
      </main>

      <footer>
        <Container maxW="4xl">
          <section>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box py="2">
                <Heading as="h3" size="lg" noOfLines={1}>
                  {`Contact`}
                </Heading>
              </Box>
            </Flex>

            <Divider orientation="horizontal" my={3} />

            <Footer />

            <div className="h-12"></div>
          </section>
        </Container>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const workExperience = await sanityClient.fetch(workExperienceQuery);

  return {
    props: { workExperience },
  };
}
