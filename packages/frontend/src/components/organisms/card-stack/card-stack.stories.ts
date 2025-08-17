import type { Meta, StoryObj } from '@storybook/react';
import { CardStack } from './card-stack';

const meta: Meta<typeof CardStack> = {
  title: 'Organisms/CardStack',
  component: CardStack,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The main CardStack component that manages profile cards and interactions. This component uses internal state management and fetches profiles automatically.',
      },
    },
  },
};
