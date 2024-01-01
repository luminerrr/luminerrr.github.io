import Navbar from "./navbar";
import Footer from "./footer";
import { Flex } from "@chakra-ui/react";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        mx={{ base: "14px", sm: "24px", md: "48px", lg: "80px" }}
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
}
