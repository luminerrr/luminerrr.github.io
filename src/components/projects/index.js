import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import showcase1 from "../../assets/showcase-1.png";

export default function Projects() {
  return (
    <Flex direction="column" alignItems="center" mt="24px">
      <Heading
        fontSize="48px"
        fontWeight="700"
        boxShadow="0px 24px 15px -24px #FDC435"
        pb="8px"
      >
        Projects
      </Heading>

      <Flex direction="row" bg="white" borderRadius="16px" mt="24px">
        <Flex
          direction="column"
          w="50%"
          justifyContent="center"
          px="48px"
          gap="24px"
        >
          <Heading textAlign="start">Secondhand</Heading>
          <Text fontSize="18px" color="gray_text" textAlign="justify">
            82% of Indonesians possess approximately 200 million unused items.
            Our platform aims to help them convert these items into money
            through the advantage of bargaining. We stand out from competitors
            like Carousell and E-bay. Our frontend uses React.js, and the
            backend relies on Node.js with PostgreSQL as the database.
          </Text>
          <Button
            border="1px solid"
            background="white"
            borderRadius="24px"
            width="fit-content"
          >
            View Project
          </Button>
        </Flex>
        <Flex direction="row" justifyContent="center" w="50%">
          <Image src={showcase1} />
        </Flex>
      </Flex>
    </Flex>
  );
}
