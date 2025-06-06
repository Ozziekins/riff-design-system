import React from 'react';
import { Box } from '../components/primitives/Box/Box';
import { Heading } from '../components/Typography/Heading/Heading';
import { Paragraph } from '../components/Typography/Paragraph/Paragraph';
import { Button } from '../components/Form/Button/Button';
import { TextInput } from '../components/Form/TextInput/TextInput';
import { Flex } from '../components/layout/Flex/Flex';
import { Stack } from '../components/layout/Stack/Stack';

const LoginPage = () => {
  return (
    <Flex direction="column">
      {/* Header */}
      <Box padding={2} height='sizeFull'>
        <Flex justify="space-between" align="center" gap={3}>
          <img src="/fender-logo.jpg" alt="Fender Play Logo" width="200" height="auto" />
          <Flex gap={4}>
            <Button variant="tertiaryBlack">Login</Button>
            <Button variant="tertiaryBlack">Values</Button>
            <Button variant="tertiaryBlack">Open roles</Button>
          </Flex>
        </Flex>
      </Box>

      {/* Main content — this grows to fill remaining space */}
      <Box padding={2}>
        <Flex
          gap={6}
          align="center"
          justify="center"
          paddingTop={8}
          paddingBottom={8}
          grow={1}
        >
          <Box
            backgroundColor="color-neutral-1"
            width="size21"
            height="size19"
          />
          <Stack gap={5}>
            <Heading level={1}>Login to see status of your applications</Heading>
            <TextInput label="Username" placeholder="Username" />
            <TextInput label="Password" placeholder="Password" type="password" />
            <Box>
              <Button variant='primaryBlack'>See Applications</Button>
            </Box>
          </Stack>
        </Flex>
      </Box>

      {/* Footer */}
      <Box backgroundColor="border" padding={6} margin={4}>
        <Paragraph>[Footer]</Paragraph>
      </Box>
    </Flex>
  );
};

export default LoginPage;
