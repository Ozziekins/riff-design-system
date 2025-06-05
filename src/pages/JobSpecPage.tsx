import React, { useState } from 'react';
import { Box } from '../components/primitives/Box/Box';
import { Heading } from '../components/Typography/Heading/Heading';
import { Paragraph } from '../components/Typography/Paragraph/Paragraph';
import { Button } from '../components/Form/Button/Button';
import { TextInput } from '../components/Form/TextInput/TextInput';
import { Select } from '../components/Form/Select/Select';
import { CheckboxGroup } from '../components/Form/CheckboxGroup/CheckboxGroup';
import { Stack } from '../components/layout/Stack/Stack';
import { Flex } from '../components/layout/Flex/Flex';

const JobSpecPage = () => {
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [eligibility, setEligibility] = useState<string[]>(['eligible']);

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
        <Stack gap={4} style={{ flex: 1 }}>
          <Heading level={1}>Product Designer for Barcelona HQ</Heading>
          <Paragraph>Write an engaging introduction to this role, driving users to action.</Paragraph>
          <Button>See Openings</Button>
        </Stack>
        <Box backgroundColor="surface" style={{ width: '300px', height: '300px' }} />
      </Flex>

      {/* Apply Now */}
      <Heading level={2}>Apply Now</Heading>
      <Flex gap={6}>
        <Box style={{ flex: '1 1 300px' }}>
          <TextInput label="Your name" placeholder="Your name" />
        </Box>
        <Box style={{ flex: '1 1 300px' }}>
          <TextInput label="Email" tone="error" defaultValue="test@gmail.cog" />
        </Box>
        <Box style={{ flex: '1 1 300px' }}>
          <Select
            label="Role"
            options={[
              { value: 'designer', label: 'Designer' },
              { value: 'developer', label: 'Developer' },
            ]}
          />
        </Box>
        <Box style={{ flex: '1 1 300px' }}>
          <CheckboxGroup
            name="eligibility"
            options={[{ value: 'eligible', label: 'I am eligible to work in Barcelona' }]}
            selectedValues={eligibility}
            onChange={setEligibility}
          />
        </Box>
      </Flex>

      <Heading level={3}>E-mail marketing experience</Heading>
      <CheckboxGroup
        name="experience"
        options={[
          { value: 'marketing', label: 'Marketing Emails' },
          { value: 'news', label: 'News & Updates Emails' },
          { value: 'production', label: 'Production Process Emails' },
        ]}
        selectedValues={selectedExperience}
        onChange={setSelectedExperience}
      />

      <Box margin={4}>
        <Button>Submit Application</Button>
      </Box>

      {/* Footer */}
      <Box backgroundColor="border" padding={4} style={{ textAlign: 'center', marginTop: 5 }}>
        <Paragraph>[Footer]</Paragraph>
      </Box>
    </Box>
  );
};

export default JobSpecPage;
