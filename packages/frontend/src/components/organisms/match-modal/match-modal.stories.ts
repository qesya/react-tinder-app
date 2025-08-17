import type { Meta, StoryObj } from '@storybook/react';
import { MatchModal } from './match-modal';

const meta: Meta<typeof MatchModal> = {
  title: 'Organisms/MatchModal',
  component: MatchModal,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open/visible',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when modal is closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => console.log('Modal closed'),
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onClose: () => console.log('Modal closed'),
  },
};
