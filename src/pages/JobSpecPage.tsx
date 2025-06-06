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
import { List } from '../components/Typography/List/List';
import { Badge } from '../components/Display/Badge/Badge';
import { Anchor } from '../components/Navigation/Anchor/Anchor';
import { Link } from 'react-router-dom';

const JobSpecPage = () => {
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [eligibility, setEligibility] = useState<string[]>(['eligible']);

  return (
    <Box padding={5}>
      {/* Header */}
      <Flex justify="space-between" align="center" gap={4}>
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

      {/* Hero Section */}
      <Box padding={5} width='size23' margin={3}>
      {/* <Flex align="center" justify="flex-start" gap={8} paddingBottom={8}>
        <Flex direction='column' gap={4}>
          <Heading level={1}>Product Designer for Barcelona HQ</Heading>
          <Paragraph>Write an engaging introduction to this role, driving users to action.</Paragraph>
          <Flex>
            <Button variant="secondaryBlack">See Openings</Button>
          </Flex>
        </Flex>
        <Box
          backgroundColor="color-neutral-1"
          width="size21"
          height="size19"
        />
      </Flex> */}

      {/* Job Description Section */}
<Flex direction="column" gap={4} paddingBottom={8}>
  <Anchor href="" variant="internal">{'Back to all jobs'}</Anchor>

  <Flex justify="space-between" align="center" gap={4} paddingBottom={4}>
  <Heading level={1}>Senior Software Engineer, DSP</Heading>
    <Button variant="primary">Apply</Button>
  </Flex>

  <Paragraph>
    Fender Musical Instruments Corporation (FMIC) is a world-famous brand with offices across the globe. Fender was born in Southern California and has built a worldwide influence beyond the studio and the stage. A Fender is more than an instrument; it’s a cultural symbol that resonates globally.
  </Paragraph>

  <Paragraph>
    We are searching for a Senior Software Engineer, DSP to join our team in Scottsdale, AZ. This role will focus on the development and optimization of digital signal processing algorithms for guitar and bass amplifiers and effects. The ideal candidate will have hands-on experience in modeling analog musical gear, real-time simulation, embedded systems programming, and product development in the music technology space.
  </Paragraph>

  <Heading level={3}>Essential Functions:</Heading>
  <List>
    <li>Design, model, and implement amplifier and effects algorithms based on vintage and modern musical gear.</li>
    <li>Reverse engineer reference hardware and schematics to inform DSP modeling efforts.</li>
    <li>Create real-time circuit simulations and implement algorithms on embedded platforms.</li>
    <li>Collaborate with the Product team to refine, demonstrate, and gain approval for DSP algorithms.</li>
    <li>Use tools such as C++, assembly, Python, MATLAB, LTspice, JUCE, and VST for DSP software development.</li>
    <li>Optimize DSP code for real-time performance on target hardware using tools such as LTTNG and perf.</li>
    <li>Debug and resolve DSP performance or functionality issues.</li>
    <li>Contribute to process improvement initiatives and maintain high code quality through unit testing.</li>
    <li>Operate within an Agile SCRUM team, collaborating closely with cross-functional partners.</li>
    <li>Perform additional duties as assigned.</li>
  </List>

  <Heading level={3}>Qualifications:</Heading>
  <List>
    <li>Bachelor’s degree in Electrical Engineering, Computer Engineering, or Computer Science.</li>
    <li>Minimum 4 years of experience in DSP software development using C++ and assembly.</li>
    <li>Proven expertise modeling analog circuits used in guitar/bass amplifiers and pedals.</li>
    <li>Deep understanding of schematics and reverse engineering of musical equipment.</li>
    <li>Strong background in optimizing DSP algorithms for embedded platforms.</li>
    <li>Prior experience in product development within the musical instrument industry.</li>
    <li>Familiarity with vintage and modern guitar/bass amps and pedals.</li>
    <li>Ability to work in a hybrid or remote environment, within a reasonable commuting distance as approved by the employer.</li>
  </List>

  <Heading level={3}>About Fender Musical Instruments:</Heading>
  <Paragraph>
    Fender Musical Instruments Corporation (FMIC) is one of the world’s leading musical instrument manufacturers, marketers, and distributors, with a portfolio of brands that includes Fender®, Squier®, Gretsch®, Jackson®, EVH®, Charvel®, and Groove Tubes®, among others.
  </Paragraph>
  <Paragraph>
    FMIC offers a competitive benefits package including medical, dental, 401(k), paid time off, and an employee equipment purchase program.
  </Paragraph>
  <Paragraph>
    Fender Musical Instruments Corporation is an equal opportunity employer and considers qualified applicants for employment without regard to race, gender, age, color, religion, disability, veteran status, sexual orientation, or any other protected factor.
  </Paragraph>
  <Paragraph>
    Fender is required by law in certain jurisdictions to include a pay scale in the job posting for this position. The current pay scale for this position is $100,829–$119,354 per year.
  </Paragraph>

  <Flex gap={2}>
            <Badge tone="primary">NY</Badge>
            <Badge tone="info">Remote</Badge>
          </Flex>
</Flex>


      {/* Apply Now Section */}
      <Flex direction='column' gap={6} paddingBottom={8}>
        <Heading level={2}>Apply Now</Heading>
        <Stack gap={4} direction="horizontal">
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" tone="error" defaultValue="test.gmail@cog" />
        </Stack>
        <Flex>
          <Select
            label="Role"
            options={[
              { value: 'designer', label: 'Designer' },
              { value: 'developer', label: 'Developer' },
            ]}
          />
        </Flex>
        <CheckboxGroup
          name="eligibility"
          options={[{ value: 'eligible', label: 'I am eligible to work in Barcelona' }]}
          selectedValues={eligibility}
          onChange={setEligibility}
        />
      </Flex>

      {/* Email Marketing Experience */}
      <Flex direction='column' gap={4} paddingBottom={8}>
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
        <Flex>
          <Button variant="primaryBlack">Submit Application</Button>
        </Flex>
      </Flex>
      </Box>

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

export default JobSpecPage;
