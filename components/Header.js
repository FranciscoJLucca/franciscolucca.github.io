import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import NextLink from 'next/link'

const Header = () => {
  return (
    <Flex
      position="sticky"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      bg="white"
      as="nav"
      zIndex="10"
      top="0"
      backdropFilter="saturate(180%) blur(20px)"
      transition="height .5s, line-height .5s"
    >
      <NextLink href="/" passHref>
        <Button as="a">
          Logo SVG
        </Button>
      </NextLink>
      <Box>
        <NextLink href="/#about" passHref>
          <Button as="a">
            About
          </Button>
        </NextLink>

        <NextLink href="/#skills" passHref>
          <Button as="a" transform="none" textDecoration="none">
            Skills
          </Button>
        </NextLink>

        <NextLink href="/#experiences" passHref>
          <Button as="a">
            Experiences
          </Button>
        </NextLink>

        <NextLink href="/#certifications" passHref>
          <Button as="a">
            Certifications
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Header;
