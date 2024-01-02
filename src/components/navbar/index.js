import {
  Flex,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BurgerIcon } from "../icons/navbar";

export default function Navbar() {
  return (
    <>
      <Flex
        minH="4rem"
        bg="white"
        alignItems="center"
        px="36px"
        justifyContent="space-between"
        zIndex={100}
        position={"sticky"}
        top={0}
      >
        <Text
          mb={0}
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          fontWeight="700"
          color="main_color"
        >
          Kevin Ezra
        </Text>
        <Box display={{ lg: "none" }}>
          <Menu>
            <MenuButton as={"button"}>
              <BurgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link
                  fontWeight="500"
                  color="main_color"
                  _hover={{ color: "black" }}
                  href="/about"
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  fontWeight="500"
                  color="main_color"
                  _hover={{ color: "black" }}
                  href="/projects"
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  fontWeight="500"
                  color="main_color"
                  _hover={{ color: "black" }}
                >
                  Contacts
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Flex direction="row" gap="48px" display={{ base: "none", lg: "flex" }}>
          <Link
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            fontWeight="500"
            color="main_color"
            _hover={{ color: "black" }}
            href="/about"
          >
            About
          </Link>
          <Link
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            fontWeight="500"
            color="main_color"
            _hover={{ color: "black" }}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            fontWeight="500"
            color="main_color"
            _hover={{ color: "black" }}
          >
            Contacts
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
