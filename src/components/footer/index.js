import { Flex, Link, Text } from "@chakra-ui/react";
import { EmailIcon, InstagramIcon, LinkedinIcon } from "../icons/navbar";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <Flex direction="column" alignItems="center" gap="32px">
      <Flex direction="row" gap="24px">
        <Link href="https://www.instagram.com/kevinezra_/" isExternal>
          <InstagramIcon />
        </Link>
        <Link href="https://www.instagram.com/kevinezra_/" isExternal>
          <LinkedinIcon />
        </Link>
        <Link href="https://www.instagram.com/kevinezra_/" isExternal>
          <EmailIcon />
        </Link>
      </Flex>
      <Text fontSize="16px" fontWeight="400" color="gray_text">
        Kevin Ezra {yearNow}
      </Text>
    </Flex>
  );
}
