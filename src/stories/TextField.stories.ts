import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField.tsx';

const meta: Meta<typeof TextField> = {
  title: 'Example/Text Field',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Playground: Story = {
  args: {
    label: 'Try me!',
  },
};
