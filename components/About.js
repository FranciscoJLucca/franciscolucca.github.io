import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, IconButton, Image, Text, VStack, Stack, Divider, Link, Spacer } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const About = () => {
  return (
    <Stack direction={["column", "row"]} spacing={0}>
      <Flex height="100vh" width="100vw" flexDirection="column" justify="center" align="center">
        <Image
          alt="Francisco Lucca"
          borderRadius="full"
          boxSize="350px"
          src="https://avatars.githubusercontent.com/u/48070476?s=400&u=4f16d923d1c02a5cd1a7d5c23c76328e86f60cea&v=4"
        />
        <Heading size="lg" pt="15px">Francisco João Lucca Neto</Heading>
        <Heading size="md" pt="15px">Software Engineering Studant</Heading>
        <HStack spacing="30px" pt="15px">
          <IconButton
            aria-label="Github"
            icon={<AiFillGithub size="50px" />}
            onClick={() => { window.open('https://github.com/FranciscoJLucca') }}
            size="xl"
          />
          <IconButton
            aria-label="Email"
            icon={<AiFillMail size="50px" />}
            onClick={() => { window.open('mailto:franciscojoaoluccaneto@gmail.com') }}
          />
          <IconButton
            aria-label="Linkedin"
            icon={<AiFillLinkedin size="50px" />}
            onClick={() => { window.open('https://www.linkedin.com/in/francisco-jo%C3%A3o-lucca-neto/') }}
          />
        </HStack>
      </Flex>
      <Flex height="100vh" width="100vw" flexDirection="column" justify="center" align="flex-start">
        <Heading>
          Me Myself and I
        </Heading>
        <Text textAlign="justify" maxW="45vw" maxH="45vh" fontSize="xl" pt="10px">
          Hi how are you ? I hope everything is fine. I'm Francisco João Lucca Neto. I started studying programming in 2018
          which was also the year I started studying Computer Engineering at <Link href="https://www.pucrs.br/en/" isExternal="true">PUCRS <ExternalLinkIcon /></Link>.
          The first language I had contact with was C and believe me it was terrible. Today I study Software Engineering, also at PUCRS, and work
          at LIS (Laboratory of Innovation and Software). Currently I'm very interested in DevOps technologies, especially AWS.
        </Text>
        <HStack pt="40px" w="50vw" maxW="45vw">
          <VStack align="flex-start">
            <Heading size="lg">Interest</Heading>
            <Text fontSize="lg">
              <li>
                Software Engineering
              </li>
            </Text>
            <Text fontSize="lg">
              <li>
                DevOps
              </li>
            </Text>
          </VStack>
          <Spacer />
          <VStack align="flex-start">
            <Heading size="lg">Education</Heading>
            <Text fontSize="lg">
              <li>
                mar/2018 - jul/2018 Computer Engineering (PUCRS)
              </li>
            </Text>
            <Text fontSize="lg">
              <li>
                ago/2018 - now Software Engineering (PUCRS)
              </li>
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Stack>
  );
}

export default About;