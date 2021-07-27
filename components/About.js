import { Flex, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const About = () => {
  return (
    <HStack width="100vw" height="100vh" justifyContent="center">
      <VStack>
        <Image
          alt="Francisco Lucca"
          borderRadius="full"
          boxSize="350px"
          src="https://avatars.githubusercontent.com/u/48070476?s=400&u=4f16d923d1c02a5cd1a7d5c23c76328e86f60cea&v=4"
        />
        <Heading size="lg">Francisco João Lucca Neto</Heading>
        <Heading size="md">Software Engineering Studant</Heading>
        <HStack spacing="30px">
          <IconButton
            aria-label="Github"
            icon={<AiFillGithub size="50px" />}
            onClick={() => { window.open('https://github.com/FranciscoJLucca') }}
            size="xl"
          />
          <IconButton
            aria-label="Github"
            icon={<AiFillMail size="50px" />}
            onClick={() => { window.open('mailto:franciscojoaoluccaneto@gmail.com') }}
          />
          <IconButton
            aria-label="Github"
            icon={<AiFillLinkedin size="50px" />}
            onClick={() => { window.open('https://www.linkedin.com/in/francisco-jo%C3%A3o-lucca-neto/') }}
          />
        </HStack>
      </VStack>
      <VStack>
        <Heading>Me Myself and I</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </VStack>
    </HStack>
  );
}

export default About;