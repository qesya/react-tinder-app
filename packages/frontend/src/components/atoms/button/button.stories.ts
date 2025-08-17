import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['like', 'dislike'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Like: Story = {
  args: {
    variant: 'like',
    children: '❤️',
    size: 'medium',
  },
};

export const Dislike: Story = {
  args: {
    variant: 'dislike',
    children: '❌',
    size: 'medium',
  },
};

export const LargeLike: Story = {
  args: {
    variant: 'like',
    children: '❤️',
    size: 'large',
  },
};

export const DisabledLike: Story = {
  args: {
    variant: 'like',
    children: '❤️',
    disabled: true,
  },
};

export const DisabledDislike: Story = {
  args: {
    variant: 'dislike',
    children: '❌',
    disabled: true,
  },
};
