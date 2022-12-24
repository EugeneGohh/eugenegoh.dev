/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { Container, Flex, Divider, Box, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
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

      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box py="2">
          <Heading as="h3" size="lg" noOfLines={1}>
            {`Hi! I'm Eugene Goh`}
          </Heading>
        </Box>
      </Flex>

      <Divider orientation="horizontal" my={2} />

      <Text>
        I'm a 18 y/o self-taught{" "}
        <span className="font-bold text-transparent bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500">
          software engineer
        </span>
        , actively working with TypeScript, GraphQL, and Cloud technologies.{" "}
        <br />
        <Link
          href="/about"
          className="text-blue-500 underline decoration-from-font [text-underline-position:under]"
        >
          {`Read more →`}
        </Link>
      </Text>
    </Container>
  );
}
