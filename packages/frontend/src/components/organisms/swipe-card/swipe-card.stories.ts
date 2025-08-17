import type { Meta, StoryObj } from '@storybook/react';
import { SwipeCard } from './swipe-card';
import type { Profile } from '@app/utils/types';
import type { DragState } from '@app/types';

const sampleProfile: Profile = {
  id: 'profile-emma',
  name: 'Emma',
  age: 24,
  bio: 'Adventure seeker and coffee enthusiast. Love exploring new places and meeting interesting people.',
  photos: [
    'https://images.unsplash.com/photo-1494790108755-2616b612b510',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  ],
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
    city: 'San Francisco',
  },
  interests: ['travel', 'photography', 'hiking', 'coffee'],
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const defaultDragState: DragState = {
  isDragging: false,
  startX: 0,
  currentX: 0,
  currentY: 0,
};

const meta: Meta<typeof SwipeCard> = {
  title: 'Organisms/SwipeCard',
  component: SwipeCard,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    profile: {
      control: 'object',
      description: 'The profile object to display in the card',
    },
    onLike: {
      action: 'liked',
      description: 'Function called when card is liked',
    },
    onDislike: {
      action: 'disliked',
      description: 'Function called when card is disliked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card interactions are disabled',
    },
    isVisible: {
      control: 'boolean',
      description: 'Whether the card is visible',
    },
    dragState: {
      control: 'object',
      description: 'Current drag state of the card',
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
    disabled: false,
    isVisible: true,
    setIsVisible: () => {},
    dragState: defaultDragState,
    setDragState: () => {},
  },
};

export const Disabled: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    disabled: true,
    isVisible: true,
    setIsVisible: () => {},
    dragState: defaultDragState,
    setDragState: () => {},
  },
};

export const BeingSwiped: Story = {
  args: {
    profile: sampleProfile,
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    disabled: false,
    isVisible: true,
    setIsVisible: () => {},
    dragState: {
      isDragging: true,
      startX: 200,
      currentX: 250,
      currentY: 200,
    },
    setDragState: () => {},
  },
};

export const LongBio: Story = {
  args: {
    profile: {
      ...sampleProfile,
      bio: 'I\'m a passionate traveler who has visited over 30 countries. I love immersing myself in different cultures, trying local cuisines, and capturing beautiful moments through photography. When I\'m not traveling, you can find me hiking local trails, experimenting with new coffee brewing methods, or reading about history and philosophy.',
    },
    onLike: (id: string) => console.log('Liked profile:', id),
    onDislike: (id: string) => console.log('Disliked profile:', id),
    disabled: false,
    isVisible: true,
    setIsVisible: () => {},
    dragState: defaultDragState,
    setDragState: () => {},
  },
};
