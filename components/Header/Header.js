import { Button, Flex, Heading, IconButton, Spacer, Text, useColorMode } from "@chakra-ui/react";
import Link from 'next/link';
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Flex w="100%">
      <Link href="/">
        <Button as="a" bg="inherit">
          <Text fontSize={20}>
            franciscolucca.dev
          </Text>
        </Button>
      </Link>
      <Spacer />

      <Flex
        display={["none", "none", "flex", "flex"]}
      >
        <Button bg="inherit">
          <Link href="/#about">
            About
          </Link>
        </Button>
        <Button bg="inherit">
          <Link href="/#skills">
            Skills
          </Link>
        </Button>
        <Button bg="inherit">
          <Link href="/#experiences">
            Experiences
          </Link>
        </Button>
        <Button bg="inherit">
          <Link href="/#certifications">
            Certifications
          </Link>
        </Button>
      </Flex>

      <IconButton icon={isDarkMode ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} bg="inherit" />
    </Flex>
  );
}

export default Header;