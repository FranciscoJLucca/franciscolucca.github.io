import { Flex, Heading, HStack, IconButton, Image, Text, VStack, Stack, Divider, Link } from "@chakra-ui/react";
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
      </Flex>
      <Flex height="100vh" width="110vw" flexDirection="column" justify="center" align="flex-start">
        <Heading>
          Me Myself and I
        </Heading>
        <Text textAlign="justify" maxW="45vw" maxH="45vh" fontSize="2xl">
          Oi, como você está ? Eu espero que esteja tudo bem. Eu sou o Francisco João Lucca Neto, comecei a estudar programação em 2018
          que tambem foi o ano que comecei a cursar Engenharia de Computação na <Link href="https://www.pucrs.br/en/" isExternal="true">PUCRS</Link>.
          A primeira linguagem que tive contato foi C e acredite em mim, foi terrivel. Hoje curso Engenharia de Software, tambem na PUCRS, e trabalho
          no LIS (Laboratorio de Inovação e Software). Atualmente tenho me enteressado muito com tecnologias de DevOps, especialente AWS.
        </Text>
      </Flex>
    </Stack>
  );
}

export default About;