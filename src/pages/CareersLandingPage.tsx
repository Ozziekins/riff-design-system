import React from 'react';
import { Box } from '../components/primitives/Box/Box';
import { Heading } from '../components/Typography/Heading/Heading';
import { Paragraph } from '../components/Typography/Paragraph/Paragraph';
import { Button } from '../components/Form/Button/Button';
import { Accordion } from '../components/Accordion/Accordion';
import { Anchor } from '../components/Navigation/Anchor/Anchor';
import { Flex } from '../components/layout/Flex/Flex';
import { Stack } from '../components/layout/Stack/Stack';
import { Select } from '../components/Form/Select/Select';
import { Text } from '../components/primitives/Text/Text';
import { Card } from '../components/Display/Card/Card';
import { Badge } from '../components/Display/Badge/Badge';
import { Link } from 'react-router-dom';

const CareersLandingPage = () => {
  return (
    <Box padding={5}>
      {/* Header */}
      <Flex justify="space-between" align="center" gap={4} margin={3}>
        <Link to="/">
  <img src="/fender-logo.jpg" alt="Fender Play Logo" width="200" height="auto" />
</Link>
        <Flex gap={4}>
          <Link to="/login">
    <Button variant="tertiaryBlack">Login</Button>
  </Link>
  <Button variant="tertiaryBlack">Values</Button>
  <Link to="/job-spec">
    <Button variant="tertiaryBlack">Open roles</Button>
  </Link>
        </Flex>
      </Flex>

      <Flex direction="column" align="center">
        <Box width="size22" padding={2}>
      {/* Hero Section */}
      <Flex align="center" justify="space-between" gap={6} margin={4}>
        <img
          src="/poc-image.png"
          alt="Landing Page Image"
          width="size21"
          height="size19"
        />
        <Stack gap={1}>
          <Heading level={1}>Make History at Fender</Heading>
          <Paragraph>
            For timeless sound and style, nothing beats a Fender. Since 1946, Fender Musical Instruments Corporation (FMIC) has been tireless in its commitment to making the highest quality instruments, amps, pro-audio, accessories and digital products – and life sounds better because of it.
          </Paragraph>
          <Flex>
            <Button variant="primary">See Openings</Button>
          </Flex>
        </Stack>
      </Flex>

            {/* Filters Section */}
      <Flex gap={4} direction='row' align='center' marginBottom={4}>
            <Select
              label="Search"
              options={[
                { value: 'search1', label: 'Search' },
                { value: 'search2', label: 'Another search' },
              ]}
            />

            <Select
              label="Department"
              options={[
                { value: 'dept1', label: 'Select' },
                { value: 'dept2', label: 'Engineering' },
                { value: 'dept3', label: 'Marketing' },
              ]}
            />

            <Select
              label="Office"
              options={[
                { value: 'office1', label: 'Select' },
                { value: 'office2', label: 'Los Angeles' },
                { value: 'office3', label: 'London' },
              ]}
            />
      </Flex>

        <Heading level={1}>43 jobs</Heading>

        {/* Jobs List */}
<Stack gap={6}>
  {/* Example category */}
  <Heading level={2}>Human Resources</Heading>

  <Flex gap={6}>
    <Card padding={4} borderRadius="md" elevation="sm">
      <Stack gap={2}>
        <Heading level={3}>Training & Development Intern - Summer 2025</Heading>
        <Flex gap={2}>
          <Badge tone="primary">LA</Badge>
          <Badge tone="info">Hybrid</Badge>
        </Flex>
        <Paragraph>
          We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.
        </Paragraph>
        <Box>
        <Button variant="secondaryBlack">Apply</Button>
        </Box>
      </Stack>
    </Card>

    <Card padding={4} borderRadius="md" elevation="sm">
      <Stack gap={2}>
        <Heading level={3}>Senior Talent Operations Specialist</Heading>
        <Flex gap={2}>
          <Badge tone="primary">NY</Badge>
          <Badge tone="info">Remote</Badge>
        </Flex>
        <Paragraph>
          We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.
        </Paragraph>
        <Box>
        <Button variant="secondaryBlack">Apply</Button>
        </Box>
      </Stack>
    </Card>
  </Flex>

  {/* Example category */}
  <Heading level={2}>Information Technology</Heading>

  <Flex gap={6}>
    <Card padding={4} borderRadius="md" elevation="sm">
      <Stack gap={2}>
        <Heading level={3}>Key Account Manager</Heading>
        <Flex gap={2}>
          <Badge tone="primary">LA</Badge>
          <Badge tone="info">Hybrid</Badge>
        </Flex>
        <Paragraph>
          We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.
        </Paragraph>
        <Box>
        <Button variant="secondaryBlack">Apply</Button>
        </Box>
      </Stack>
    </Card>

    <Card padding={4} borderRadius="md" elevation="sm">
      <Stack gap={2}>
        <Heading level={3}>Sr. Software Engineer, DSP</Heading>
        <Flex gap={2}>
          <Badge tone="primary">LA</Badge>
          <Badge tone="info">Hybrid</Badge>
        </Flex>
        <Paragraph>
          We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.
        </Paragraph>
        <Box>
        <Button variant="secondaryBlack">Apply</Button>
        </Box>
      </Stack>
    </Card>

    <Card padding={4} borderRadius="md" elevation="sm">
      <Stack gap={2}>
        <Heading level={3}>Gear Advisor </Heading>
        <Flex gap={2}>
          <Badge tone="primary">UK</Badge>
          <Badge tone="info">Remote</Badge>
        </Flex>
        <Paragraph>
          We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.
        </Paragraph>
        <Box>
        <Button variant="secondaryBlack">Apply</Button>
        </Box>
      </Stack>
    </Card>
  </Flex>
</Stack>

        <Heading level={2}>Corporate benefits</Heading>

      {/* Corporate Benefits */}
        <Flex gap={8} justify="center">
          <Stack gap={0}>
            <Box
              backgroundColor="color-neutral-2"
              width="size9"
              height="size9"
              borderRadius="full"
              boxShadow="md"
            />
            <Heading level={3}>A bright future</Heading>
            <Paragraph>Nunc mattis feugiat ex scelerisque congue.</Paragraph>
          </Stack>
          <Stack gap={0} >
            <Box
              backgroundColor="color-neutral-2"
              width="size9"
              height="size9"
              borderRadius="full"
              boxShadow="md"
            />
            <Heading level={3}>Attractive comp</Heading>
            <Paragraph>Nam ut justo placerat, eleifend sem at, finibus velit.</Paragraph>
          </Stack>
          <Stack gap={0} >
            <Box
              backgroundColor="color-neutral-2"
              width="size9"
              height="size9"
              borderRadius="full"
              boxShadow="md"
            />
            <Heading level={3}>Flexible time</Heading>
            <Paragraph>Nam ut justo placerat, eleifend sem at, finibus velit.</Paragraph>
          </Stack>
        </Flex>

      {/* Latest Openings */}
      <Stack gap={1}>
        <Heading level={2}>Newest Openings</Heading>
        <Accordion
          gap={4}
          items={[
            { id: 'job1', title: 'Training & Development Intern - Summer 2025', content: 'We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.' },
            { id: 'job2', title: 'Key Account Manager, Specialty Brands', content: 'We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.' },
            { id: 'job3', title: 'Manager, Production Control', content: 'We are searching for a Learning & Development Summer Intern based in Los Angeles to join our team. This 6-8 week internship offers hands-on experience in developing and delivering corporate training programs.' },
          ]}
        />
      </Stack>

      {/* Reinforcement Section */}
      <Flex align="center" justify="space-between" gap={1} margin={6}>
        <Box
          backgroundColor="color-neutral-1"
          width="size21"
          height="size19"
        />
        <Stack gap={4} >
          <Heading level={2}>Take a peep at what goes on at Fender!</Heading>
          <Paragraph>An additional message to drive users to action.</Paragraph>
          <Flex>
            <Anchor href="" variant="internal">Explore more</Anchor>
          </Flex>
        </Stack>
         </Flex>
        </Box>
      </Flex>

      {/* Footer */}
      <Box backgroundColor="transparent" padding={6} margin={4}>
        <Flex justify="space-between" align="center">
          <Flex gap={2}>
            <Button variant="link">Terms & Conditions</Button>
            <Button variant="link">Privacy Policy</Button>
          </Flex>
          <Paragraph>
            © 2025. Fender Musical Instruments Corporation. All Rights Reserved.
          </Paragraph>
        </Flex>
      </Box>
    </Box>
  );
};

export default CareersLandingPage;
