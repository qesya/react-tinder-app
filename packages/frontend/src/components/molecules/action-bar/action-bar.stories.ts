import type { Meta, StoryObj } from '@storybook/react';
import { ActionBar } from './action-bar';
import type { Profile } from '@app/utils/types';

const sampleProfile: Profile = {
  id: 'profile-sarah',
  name: 'Sarah',
  age: 25,
  bio: 'Love hiking and photography',
  photos: ['https://via.placeholder.com/400x600'],
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    city: 'New York',
  },
  interests: ['photography', 'travel'],
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const meta: Meta<typeof ActionBar> = {
  title: 'Molecules/ActionBar',
  component: ActionBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    profile: {
      control: 'object',
      description: 'The profile object for which actions are performed',
    },
    onLike: {
      action: 'liked',
      description: 'Function called when like button is clicked',
    },
    onDislike: {
      action: 'disliked',
      description: 'Function called when dislike button is clicked',
    },
    dragState: {
      control: 'object',
      description: 'The current drag state affecting button appearance',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
  },
};

export const SwipingLeft: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    dragState: {
      isDragging: true,
      startX: 200,
      currentX: 100,
      currentY: 200,
    },
  },
};

export const SwipingRight: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    dragState: {
      isDragging: true,
      startX: 100,
      currentX: 200,
      currentY: 200,
    },
  },
};

export const ExtremeDragLeft: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    dragState: {
      isDragging: true,
      startX: 200,
      currentX: 50,
      currentY: 200,
    },
  },
};

export const ExtremeDragRight: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    dragState: {
      isDragging: true,
      startX: 100,
      currentX: 250,
      currentY: 200,
    },
  },
};
