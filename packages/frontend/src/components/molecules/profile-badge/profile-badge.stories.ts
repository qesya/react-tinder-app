import type { Meta, StoryObj } from '@storybook/react';
import { ProfileBadge } from './profile-badge';
import type { Profile } from '@app/utils/types';

const createProfile = (name: string, age: number, bio: string = ''): Profile => ({
  id: `profile-${name.toLowerCase()}`,
  name,
  age,
  bio,
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
});

const meta: Meta<typeof ProfileBadge> = {
  title: 'Molecules/ProfileBadge',
  component: ProfileBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    profile: {
      control: 'object',
      description: 'The profile object containing name, age, bio, and other information',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profile: createProfile('Sarah', 25, 'Love hiking and photography'),
  },
};

export const LongName: Story = {
  args: {
    profile: createProfile('Alexandra', 28, 'Passionate about travel and adventure'),
  },
};

export const ShortBio: Story = {
  args: {
    profile: createProfile('Emma', 23, 'Artist'),
  },
};

export const LongBio: Story = {
  args: {
    profile: createProfile('Jessica', 30, 'Professional photographer and world traveler. Love exploring new cultures and capturing beautiful moments.'),
  },
};

export const MinimumInfo: Story = {
  args: {
    profile: createProfile('Sam', 21, ''),
  },
};
