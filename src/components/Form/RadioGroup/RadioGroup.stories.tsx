// src/components/Form/RadioGroup/RadioGroup.stories.tsx

import { RadioGroup } from './RadioGroup'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Example: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue)

    return (
      <RadioGroup
        {...args}
        selectedValue={selected}
        onChange={(val) => {
          setSelected(val)
          console.log('Selected:', val)
        }}
      />
    )
  },
  args: {
    name: 'example-radio',
    selectedValue: 'option1',
    options: [
      { value: 'option1', label: 'Option One' },
      { value: 'option2', label: 'Option Two' },
      { value: 'option3', label: 'Option Three' },
    ],
  },
}
