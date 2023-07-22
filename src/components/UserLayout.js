import Navbar from "./navbar";
import Footer from "./footer";
import { Flex } from "@chakra-ui/react";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <Flex direction='column' mx='80px'>
        {children}
      </Flex>
      <Footer />
    </>
  );
}
