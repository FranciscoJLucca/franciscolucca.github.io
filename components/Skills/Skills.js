import { Flex, Text, Heading, Grid, Box, Spacer } from "@chakra-ui/react";
import { FaAws, FaDocker, FaGit, FaGitAlt, FaJava, FaJs } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

function Skills() {
  return (
    <Flex width="100vw" height="100vh" height="100vh" flexDir="column" align="center">
      <Heading fontWeight="normal" pt="15px">Skills</Heading>
      <Grid
        height="100vh"
        templateColumns="1fr repeat(3, 30vh) 1fr"
        templateRows="10vw 20vw 20vw"
        templateAreas="
        '. . . . .'
          '. aws devops git .'
          '. js java other .'
        "
      >
        <Flex gridArea="aws" width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
          <FaAws size="100px" />
          <Heading isTruncated>Cloud Engineering</Heading>
          <Text pt="5px" isTruncated>Lambda, API Gateway, DynamoDB, ECS, ECR</Text>
        </Flex>

        <Flex gridArea="devops" width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
          <FaDocker size="100px" />
          <Heading isTruncated>DevOps</Heading>
          <Text pt="5px" isTruncated>Docker, Kubernetes</Text>
        </Flex>

        <Flex gridArea="git" width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
          <FaGitAlt size="100px" />
          <Heading isTruncated>Git</Heading>
          <Text pt="5px" isTruncated>Github, Github Actions</Text>
        </Flex>

        <Flex gridArea="js" width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
          <FaJs size="100px" />
          <Heading isTruncated>Javascript</Heading>
          <Text pt="5px" isTruncated>NodeJs, Typescript, React</Text>
        </Flex>

        <Flex gridArea="java" width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
          <FaJava size="100px" />
          <Heading isTruncated>Java</Heading>
          <Text pt="5px" isTruncated>Maven, JUnit, Spring</Text>
        </Flex>

        <Flex gridArea="other" width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
          <HiOutlineDotsCircleHorizontal size="100px" />
          <Heading isTruncated>Other</Heading>
          <Text pt="5px" isTruncated>Golang, Swift, Terraform</Text>
        </Flex>
      </Grid>
    </Flex>
  );
}

export default Skills;