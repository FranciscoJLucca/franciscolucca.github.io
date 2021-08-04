import { Flex, Heading, Stack } from "@chakra-ui/react";

import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from 'vertical-timeline-component-react';

const customTheme = {
  yearColor: '#405b73',
  lineColor: '#d0cdc4',
  dotColor: '#262626',
  borderDotColor: '#d0cdc4',
  titleColor: '#405b73',
  subtitleColor: '#bf9765',
  textColor: '#262626',
};

function Experiences() {
  return (
    <Stack
      justify="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
      >
        <Heading fontWeight="normal" pt="15px">Experiences</Heading>

        <Flex>
          <Timeline theme={customTheme}>
            <Container>
              <YearContent startDate='2020' currentYear />
              <BodyContent>
                <Section title='PUCRS/HP'>
                  <Description text='Laboratory of Innovation and Software' />
                </Section>
              </BodyContent>
            </Container>
          </Timeline>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Experiences;