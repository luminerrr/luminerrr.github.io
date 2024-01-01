import { Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import showcase1 from "../../assets/showcase-1.png";

export default function Projects({ data }) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      bg="white"
      borderRadius="16px"
      mt="24px"
      p={{ base: "4px", md: "16px", lg: "36px" }}
      alignItems="center"
      justifyContent="center"
      py={{ base: "12px" }}
    >
      <Flex
        direction="column"
        w={{ base: "100%", lg: "50%" }}
        justifyContent="center"
        alignItems={{ base: "center", lg: "baseline" }}
        px="48px"
        gap="24px"
      >
        <Heading
          textAlign="start"
          fontSize={{
            base: "24px",
            lg: "48px",
          }}
        >
          {data.name}
        </Heading>
        <Image
          src={data.img_link}
          objectFit="cover"
          width={{ base: "40em" }}
          display={{ lg: "none" }}
        />
        <Text
          fontSize={{ base: "12px", lg: "18px" }}
          color="gray_text"
          textAlign="justify"
        >
          {data.description}
        </Text>
        <Button
          border="1px solid"
          background="white"
          borderRadius="24px"
          width="fit-content"
          fontSize={{ base: "12px", lg: "24px" }}
          p={{ base: "12px", lg: "24px" }}
        >
          <Link href={data.link} isExternal>
            View Project
          </Link>
        </Button>
      </Flex>
      <Flex direction="row" justifyContent="center" w="50%">
        <Image
          src={data.img_link}
          objectFit="cover"
          width={{ lg: "80em" }}
          display={{
            base: "none",
            lg: "block",
          }}
        />
      </Flex>
    </Flex>
  );
}
