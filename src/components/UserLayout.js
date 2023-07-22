import { Flex } from "@chakra-ui/react";

export default function UserLayout({children}){
  return(
  <Flex minH='4rem' bg='red.200'>
    {children}
  </Flex>)
}