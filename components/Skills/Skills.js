import { Flex, Text, Heading, Grid, Box, Spacer, Stack, SimpleGrid } from "@chakra-ui/react";
import { FaAws, FaDocker, FaGit, FaGitAlt, FaJava, FaJs } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import data from './data';

function Skills() {
  return (
    <Stack>
      <Flex
        padding={[0, 0, 10, 10]}
        display="flex"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt="20px"
        >
          <Heading fontWeight="normal" pt="15px">Skills</Heading>
        </Box>

        <SimpleGrid
          columns={[1,1,3,3]}
          spacing="10px"
        >
          <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
           <FaAws size="100px" />
           <Heading isTruncated>Cloud Engineering</Heading>
           <Text pt="5px" isTruncated>Lambda, API Gateway, DynamoDB, ECS, ECR</Text>
         </Flex>

         <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
           <FaDocker size="100px" />
           <Heading isTruncated>DevOps</Heading>
           <Text pt="5px" isTruncated>Docker, Kubernetes</Text>
         </Flex>

         <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
           <FaGitAlt size="100px" />
           <Heading isTruncated>Git</Heading>
           <Text pt="5px" isTruncated>Github, Github Actions</Text>
         </Flex>

         <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
           <FaJs size="100px" />
           <Heading isTruncated>Javascript</Heading>
           <Text pt="5px" isTruncated>NodeJs, Typescript, React</Text>
         </Flex>

         <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
           <FaJava size="100px" />
           <Heading isTruncated>Java</Heading>
           <Text pt="5px" isTruncated>Maven, JUnit, Spring</Text>
         </Flex>

         <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
           <HiOutlineDotsCircleHorizontal size="100px" />
           <Heading isTruncated>Other</Heading>
           <Text pt="5px" isTruncated>Golang, Swift, Terraform</Text>
         </Flex>
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}

export default Skills;

    //  <Flex width="100vw" height="100vh" height="100vh" flexDir={["row", "row", "column", "column"]} align="center">
    //    <Heading fontWeight="normal" pt="15px">Skills</Heading>
    //    <Grid
    //      templateColumns="1fr repeat(3, 30vh) 1fr"
    //      templateRows="10vw 20vw 20vw"
    //      templateAreas="
    //      '. . . . .'
    //        '. aws devops git .'
    //        '. js java other .'
    //      "
    //    >
    //      <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
    //        <FaAws size="100px" />
    //        <Heading isTruncated>Cloud Engineering</Heading>
    //        <Text pt="5px" isTruncated>Lambda, API Gateway, DynamoDB, ECS, ECR</Text>
    //      </Flex>

    //      <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
    //        <FaDocker size="100px" />
    //        <Heading isTruncated>DevOps</Heading>
    //        <Text pt="5px" isTruncated>Docker, Kubernetes</Text>
    //      </Flex>

    //      <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
    //        <FaGitAlt size="100px" />
    //        <Heading isTruncated>Git</Heading>
    //        <Text pt="5px" isTruncated>Github, Github Actions</Text>
    //      </Flex>

    //      <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
    //        <FaJs size="100px" />
    //        <Heading isTruncated>Javascript</Heading>
    //        <Text pt="5px" isTruncated>NodeJs, Typescript, React</Text>
    //      </Flex>

    //      <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
    //        <FaJava size="100px" />
    //        <Heading isTruncated>Java</Heading>
    //        <Text pt="5px" isTruncated>Maven, JUnit, Spring</Text>
    //      </Flex>

    //      <Flex width="20vw" height="20vh" flexDir="column" justifyContent="center" alignItems="center" >
    //        <HiOutlineDotsCircleHorizontal size="100px" />
    //        <Heading isTruncated>Other</Heading>
    //        <Text pt="5px" isTruncated>Golang, Swift, Terraform</Text>
    //      </Flex>
    //    </Grid>
    //  </Flex>