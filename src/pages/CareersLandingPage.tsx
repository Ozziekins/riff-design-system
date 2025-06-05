import React from 'react';
import { Box } from '../components/primitives/Box/Box';
import { Heading } from '../components/Typography/Heading/Heading';
import { Paragraph } from '../components/Typography/Paragraph/Paragraph';
import { Button } from '../components/Form/Button/Button';
import { Accordion } from '../components/Accordion/Accordion';
import { Flex } from '../components/layout/Flex/Flex';
import { Stack } from '../components/layout/Stack/Stack';

const CareersLandingPage = () => {
  return (
    <Box padding={5}>
      {/* Header */}
      <Flex justify="space-between" align="center">
        <Button variant="secondary">Your Logo</Button>
        <Flex gap={4}>
          <Button variant="tertiary">Login</Button>
          <Button variant="tertiary">Values</Button>
          <Button variant="tertiary">Open roles</Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Flex gap={6}>
        <Box backgroundColor="surface" style={{ width: '300px', height: '300px' }} />
        <Stack gap={4}>
          <Heading level={1}>Write a motivational message for job seekers</Heading>
          <Paragraph>Write an engaging introduction to your careers page, driving users to action.</Paragraph>
          <Button>See Openings</Button>
        </Stack>
      </Flex>

      {/* Corporate Benefits */}
      <Heading level={2}>Corporate benefits</Heading>
      <Flex justify="space-between" gap={6}>
        <Stack gap={2} style={{ width: '200px', alignItems: 'center' }}>
          <Box backgroundColor="surface" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <Heading level={3}>A bright future</Heading>
          <Paragraph>Nunc mattis feugiat ex scelerisque congue.</Paragraph>
        </Stack>
        <Stack gap={2} style={{ width: '200px', alignItems: 'center' }}>
          <Box backgroundColor="surface" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <Heading level={3}>Attractive comp</Heading>
          <Paragraph>Nam ut justo placerat, eleifend sem at, finibus velit.</Paragraph>
        </Stack>
      </Flex>

      {/* Latest Openings */}
      <Heading level={2}>Latest Openings</Heading>
      <Accordion
        items={[
          { id: 'job1', title: 'Job Title XYZ', content: 'Details for Job 1' },
          { id: 'job2', title: 'Job Title XYZ', content: 'Details for Job 2' },
          { id: 'job3', title: 'Job Title XYZ', content: 'Details for Job 3' },
        ]}
      />

      {/* Reinforcement section */}
      <Flex gap={6}>
        <Box backgroundColor="surface" style={{ width: '300px', height: '300px' }} />
        <Stack gap={4}>
          <Heading level={2}>Reinforcement message</Heading>
          <Paragraph>An additional message to drive users to action.</Paragraph>
          <Button variant="secondary">See openings</Button>
        </Stack>
      </Flex>

      {/* Footer */}
      <Box backgroundColor="border" padding={4} style={{ textAlign: 'center' }}>
        <Paragraph>[Footer]</Paragraph>
      </Box>
    </Box>
  );
};

export default CareersLandingPage;
