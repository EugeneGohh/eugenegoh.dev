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
            {`My name is Eugene Goh and I'm a 18-year-old software engineer based on Kuala Lumpur, Malaysia that loves working in a hybrid environment 🌎`}
          </p>

          <br />

          <p className="mt-2 subpixel-antialiased leading-7 first:mt-0">
            {`Most of the time, I'm mostly writing TypeScript, GraphQL and Cloud technologies, and apart from that I love developing contents with technologies I'm passionate about through visualizations & share it over the Internet.`}
          </p>

          <Divider orientation="horizontal" my={3} />

          <p className="mt-2 subpixel-antialiased leading-7 first:mt-0">
            {`I've been a full-time software engineer since 2017, and I've had the
            opportunity to work with some incredible startups ranging from
            pre-seed to Series D, which has been an amazing learning experience
            for me, both in terms of technology and business. In 2022, I have
            been focusing more on developer relations to improve my people
            skills and get out of my coding comfort zone.`}
          </p>

          <br />

          <p className="mt-2 subpixel-antialiased leading-7 first:mt-0">
            {`In my free time, I like to challenge myself to be more creative and
            improve my tech skills by writing in-depth articles on commonly used
            technologies and subjects that are often misunderstood or take time
            to understand. I also enjoy giving talks at conferences and meetups.`}
          </p>
        </section>
      </Container>
    </>
  );
}
