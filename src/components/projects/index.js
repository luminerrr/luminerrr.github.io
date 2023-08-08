import { Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import showcase1 from "../../assets/showcase-1.png";

export default function Projects({ data }) {
  return (
    <Flex direction="row" bg="white" borderRadius="16px" mt="24px" p='36px'>
      <Flex
        direction="column"
        w="50%"
        justifyContent="center"
        px="48px"
        gap="24px"
      >
        <Heading textAlign="start">{data.name}</Heading>
        <Text fontSize="18px" color="gray_text" textAlign="justify">
          {data.description}
        </Text>
        <Button
          border="1px solid"
          background="white"
          borderRadius="24px"
          width="fit-content"
        >
          <Link href={data.link} isExternal>
            View Project
          </Link>
        </Button>
      </Flex>
      <Flex direction="row" justifyContent="center" w="50%">
        <Image src={data.img_link} objectFit='cover' width='400px'/>
      </Flex>
    </Flex>
  );
}
