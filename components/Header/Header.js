import { Button, Flex, Heading, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import Link from 'next/link';
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Flex w="100%">
      <Heading
        size="md" ml="8" fontWeight="semibold"
      >
        franciscolucca.dev
      </Heading>

      <Spacer />
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
      <IconButton icon={isDarkMode ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} bg="inherit" />
    </Flex>
  );
}

export default Header;