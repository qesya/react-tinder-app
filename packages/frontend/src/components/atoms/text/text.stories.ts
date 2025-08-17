import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'This is body text with variant body1',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'This is body text with variant body2',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is caption text',
  },
};

export const CustomColor: Story = {
  args: {
    variant: 'body1',
    children: 'Text with custom color',
    sx: { color: 'primary.main' },
  },
};
