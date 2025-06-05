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

      {/* Login section */}
      <Flex gap={6}>
        <Box backgroundColor="surface" style={{ width: '300px', height: '300px' }} />
        <Stack gap={4} style={{ flex: 1 }}>
          <Heading level={1}>Login to see status of your application/s</Heading>
          <TextInput label="Username" placeholder="Username" />
          <TextInput label="Password" placeholder="Password" type="password" />
          <Button>See Applications</Button>
        </Stack>
      </Flex>

      {/* Footer */}
      <Box backgroundColor="border" padding={4} style={{ textAlign: 'center' }}>
        <Paragraph>[Footer]</Paragraph>
      </Box>
    </Box>
  );
};

export default LoginPage;
