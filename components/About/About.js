import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, Box, IconButton, Image, Text, VStack, Stack, HStack, Link, Spacer, useMediaQuery } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

function About() {
  return (
    <Stack>
      <Flex
        direction={["column", "column", "row", "row"]}
        padding={[0, 0, 32, 32]}
        alignSelf="center"
        
      >
        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
          <Image
            alt="Francisco Lucca"
            borderRadius="full"
            boxSize="350px"
            alignSelf="center"
            src="https://avatars.githubusercontent.com/u/48070476?s=400&u=4f16d923d1c02a5cd1a7d5c23c76328e86f60cea&v=4"
          />
          <Heading size="lg" pt="15px">Francisco João Lucca Neto</Heading>
          <Heading size="md" pt="15px">Software Engineering Studant</Heading>
          <HStack spacing="30px" pt="15px">
            <IconButton
              aria-label="Github"
              icon={<AiFillGithub size="50px" />}
              onClick={() => { window.open('https://github.com/FranciscoJLucca') }}
              bg="inherit"
            />
            <IconButton
              aria-label="Email"
              icon={<AiFillMail size="50px" />}
              onClick={() => { window.open('mailto:franciscojoaoluccaneto@gmail.com') }}
              bg="inherit"
            />
            <IconButton
              aria-label="Linkedin"
              icon={<AiFillLinkedin size="50px" />}
              onClick={() => { window.open('https://www.linkedin.com/in/francisco-jo%C3%A3o-lucca-neto/') }}
              bg="inherit"
            />
          </HStack>
        </Box>
        <Box ml={[0, 0, 150, 150]} mt={[50, 50, 0, 0]} display="flex" justifyContent="center" alignItems="flex-start" flexDir="column">
          <Heading>About Me</Heading>
          <Text textAlign="justify" maxW="45vw" maxH="45vh" fontSize="xl" pt="10px">
            Hi how are you ? I hope everything is fine. I'm Francisco João Lucca Neto. I started studying programming in 2018
            which was also the year I started studying Computer Engineering at <Link href="https://www.pucrs.br/en/" isExternal="true">PUCRS <ExternalLinkIcon /></Link>.
            The first language I had contact with was C and believe me it was terrible. Today I study Software Engineering, also at PUCRS, and work
            at LIS (Laboratory of Innovation and Software). Currently I'm very interested in DevOps technologies, especially AWS.
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
}

export default About;