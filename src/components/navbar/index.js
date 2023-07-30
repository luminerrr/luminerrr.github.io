import { Flex, Link, Text } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <>
      <Flex
        minH="4rem"
        bg="transparent"
        alignItems="center"
        px="36px"
        justifyContent="space-between"
        zIndex={100}
      >
        <Text mb={0} fontSize="18px" fontWeight="700" color="main_color">
          Kevin Ezra
        </Text>
        <Flex direction="row" gap="48px">
          <Link
            fontSize="18px"
            fontWeight="500"
            color="main_color"
            _hover={{ color: "black" }}
            href="/about"
          >
            About
          </Link>
          <Link
            fontSize="18px"
            fontWeight="500"
            color="main_color"
            _hover={{ color: "black" }}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            fontSize="18px"
            fontWeight="500"
            color="main_color"
            _hover={{ color: "black" }}
          >
            Contacts
          </Link>
        </Flex>
      </Flex>
    </>)
}