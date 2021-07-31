import { useColorMode, VStack } from "@chakra-ui/react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";

function Index() {
  return (
    <VStack p={5}>
      <Header />
      <About />
    </VStack>
  )
}

export default Index;
