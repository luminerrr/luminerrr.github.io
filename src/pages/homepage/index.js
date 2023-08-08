import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import UserLayout from "../../components/UserLayout";
import mainPhoto from "../../assets/photo_bgyellow.png";
import Projects from "../../components/projects";
import dummyData from "../../const/dummyData";

export default function Homepage() {
  return (
    <UserLayout>
      <SimpleGrid columns={2} mt="24px">
        <Flex alignItems="center" direction="column">
          <Flex direction="column">
            <Text
              fontSize="20px"
              fontWeight="700"
              color="yellow_text"
              fontFamily="Nunito"
            >
              Fullstack Web Developer
            </Text>
            <Heading fontSize="64px" fontWeight="700">
              Hello, my name is <br />
              Kevin Ezra{" "}
            </Heading>
            <Text
              fontSize="24px"
              fontWeight="400"
              color="gray_text"
              textAlign="justify"
            >
              I am a fullstack web developer with a strong focus on
              frontend development. With a keen eye for design and user
              experience, I excel at crafting visually appealing and intuitive
              interfaces, while also possessing the ability to seamlessly
              integrate them with robust backend functionalities. My passion for
              creating dynamic and responsive web applications drives me to stay
              at the forefront of the latest web technologies and trends.
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" justifyContent="center">
          <Image src={mainPhoto} objectFit="cover" top="0" zIndex={5} />
        </Flex>
      </SimpleGrid>
      <Flex direction="column" alignItems="center" mt="24px" id="project-view">
        <Heading
          fontSize="48px"
          fontWeight="700"
          boxShadow="0px 24px 15px -24px #FDC435"
          pb="8px"
        >
          Projects
        </Heading>
        {dummyData.map((dummy) => (
          <Projects data={dummy} />
        ))}
      </Flex>
    </UserLayout>
  );
}
