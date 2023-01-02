import React from "react";
import Navbar from "../../components/Navbar";
import { Container, Flex, Box, Heading, Divider } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Navbar />

      <Container maxW="4xl">
        <section className="mx-auto my-16 sm:my-32 sm:max-w-xl md:max-w-3xl lg:my-16 lg:max-w-5xl">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box py="2">
              <Heading as="h3" size="lg" noOfLines={1}>
                {`About Me`}
              </Heading>
            </Box>
          </Flex>

          <Divider orientation="horizontal" my={3} />
          <p className="mt-2 subpixel-antialiased leading-7 first:mt-0">
            {`My name is Eugene Goh and I'm a 18-year-old software engineer based on Kuala Lumpur, Malaysia. His main interests revolve around software engineering, fintech & product development. Welcome to his digital garden where he shares what he is currently learning about shipping impactful products, becoming a better engineer and growing a career in tech 🌎.`}
          </p>

          <br />

          <p className="mt-2 subpixel-antialiased leading-7 first:mt-0">
            {`Most of the time, I'm mostly writing TypeScript, GraphQL and Cloud technologies. In my free time, I like to challenge myself to be more creative and improve my tech skills by writing in-depth articles on commonly used technologies and subjects that are often misunderstood or take time to understand. I also enjoy attending talks at conferences, meetups & hackathons.`}
          </p>
        </section>
      </Container>
    </>
  );
}
