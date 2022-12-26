import React from "react";
import {
  Card,
  SimpleGrid,
  CardHeader,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  Badge,
} from "@chakra-ui/react";

function MultipleCards() {
  return (
    <>
      <SimpleGrid
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Badge colorScheme="cyan" variant="subtle" my={1}>
              Project
            </Badge>
            <Heading size="md">Project name</Heading>
          </CardHeader>
          <CardBody>
            <Text>Project description</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Badge colorScheme="cyan" variant="subtle" my={1}>
              Project
            </Badge>
            <Heading size="md">Project name</Heading>
          </CardHeader>
          <CardBody>
            <Text>Project description</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Badge colorScheme="cyan" variant="subtle" my={1}>
              Project
            </Badge>
            <Heading size="md">Project name</Heading>
          </CardHeader>
          <CardBody>
            <Text>Project description</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default MultipleCards;
