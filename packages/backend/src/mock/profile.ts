import { Profile } from "../types";

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 21,
    bio: 'Love hiking and photography 📸',
    photos: [
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face'
    ],
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    interests: ['hiking', 'photography', 'travel'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15')
  },
  {
    id: '2',
    name: 'Jessica',
    age: 23,
    bio: 'Coffee lover and book enthusiast ☕📚',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400'
    ],
    location: {
      latitude: 37.7849,
      longitude: -122.4094,
      city: 'San Francisco'
    },
    interests: ['reading', 'coffee', 'music'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-02-10')
  },
  {
    id: '3',
    name: 'Emma',
    age: 25,
    bio: 'Yoga instructor and nature lover 🧘‍♀️🌿',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400'
    ],
    location: {
      latitude: 37.7649,
      longitude: -122.4294,
      city: 'San Francisco'
    },
    interests: ['yoga', 'meditation', 'nature'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-03-05'),
    updatedAt: new Date('2023-03-05')
  },
  {
    id: '4',
    name: 'Olivia',
    age: 22,
    bio: 'Artist and creative soul 🎨',
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400'
    ],
    location: {
      latitude: 37.7549,
      longitude: -122.4394,
      city: 'San Francisco'
    },
    interests: ['art', 'painting', 'design'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-04-12'),
    updatedAt: new Date('2023-04-12')
  },
  {
    id: '5',
    name: 'Sophia',
    age: 24,
    bio: 'Fitness enthusiast and healthy living advocate 💪',
    photos: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400'
    ],
    location: {
      latitude: 37.7949,
      longitude: -122.3994,
      city: 'San Francisco'
    },
    interests: ['fitness', 'nutrition', 'wellness'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-05-20'),
    updatedAt: new Date('2023-05-20')
  },
  {
    id: '6',
    name: 'Maya',
    age: 26,
    bio: 'Chef who loves experimenting with flavors 👩‍🍳',
    photos: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
    ],
    location: {
      latitude: 37.7749,
      longitude: -122.4094,
      city: 'San Francisco'
    },
    interests: ['cooking', 'food', 'wine'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-06-01')
  },
  {
    id: '7',
    name: 'Zoe',
    age: 20,
    bio: 'Dance student with a passion for movement 💃',
    photos: [
      'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400',
      'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400'
    ],
    location: {
      latitude: 37.7849,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    interests: ['dance', 'music', 'performance'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-06-15')
  },
  {
    id: '8',
    name: 'Luna',
    age: 28,
    bio: 'Veterinarian who adores all animals 🐕🐱',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400'
    ],
    location: {
      latitude: 37.7649,
      longitude: -122.4094,
      city: 'San Francisco'
    },
    interests: ['animals', 'veterinary', 'hiking'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-07-01')
  },
  {
    id: '9',
    name: 'Aria',
    age: 27,
    bio: 'Software engineer who codes and climbs 👩‍💻🧗‍♀️',
    photos: [
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?w=400',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    ],
    location: {
      latitude: 37.7549,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    interests: ['programming', 'rock climbing', 'tech'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-07-15'),
    updatedAt: new Date('2023-07-15')
  },
  {
    id: '10',
    name: 'Isabella',
    age: 23,
    bio: 'Marine biology student exploring the ocean 🌊',
    photos: [
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400'
    ],
    location: {
      latitude: 37.7949,
      longitude: -122.4294,
      city: 'San Francisco'
    },
    interests: ['marine biology', 'scuba diving', 'conservation'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-08-01')
  },
  {
    id: '11',
    name: 'Chloe',
    age: 24,
    bio: 'Interior designer creating beautiful spaces ✨',
    photos: [
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
      'https://images.unsplash.com/photo-1506629905851-f4df84b66364?w=400'
    ],
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    interests: ['design', 'architecture', 'art'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-08-15')
  },
  {
    id: '12',
    name: 'Mia',
    age: 22,
    bio: 'Photographer capturing life\'s moments 📷',
    photos: [
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'
    ],
    location: {
      latitude: 37.7849,
      longitude: -122.4094,
      city: 'San Francisco'
    },
    interests: ['photography', 'travel', 'street art'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-09-01')
  },
  {
    id: '13',
    name: 'Ava',
    age: 25,
    bio: 'Musician and songwriter 🎵',
    photos: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      'https://images.unsplash.com/photo-1494790108755-2616b612b192?w=400'
    ],
    location: {
      latitude: 37.7649,
      longitude: -122.4294,
      city: 'San Francisco'
    },
    interests: ['music', 'guitar', 'songwriting'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-09-15')
  },
  {
    id: '14',
    name: 'Harper',
    age: 26,
    bio: 'Teacher who loves inspiring young minds 📚',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400'
    ],
    location: {
      latitude: 37.7549,
      longitude: -122.4394,
      city: 'San Francisco'
    },
    interests: ['education', 'reading', 'community service'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date('2023-10-01')
  },
  {
    id: '15',
    name: 'Grace',
    age: 21,
    bio: 'Environmental science student and activist 🌱',
    photos: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400'
    ],
    location: {
      latitude: 37.7949,
      longitude: -122.3994,
      city: 'San Francisco'
    },
    interests: ['environment', 'sustainability', 'activism'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-10-15'),
    updatedAt: new Date('2023-10-15')
  },
  {
    id: '16',
    name: 'Lily',
    age: 29,
    bio: 'Travel blogger exploring the world 🌍',
    photos: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
    ],
    location: {
      latitude: 37.7749,
      longitude: -122.4094,
      city: 'San Francisco'
    },
    interests: ['travel', 'writing', 'culture'],
    isActive: true,
    isMatch: true,
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2023-11-01')
  },
  {
    id: '17',
    name: 'Nova',
    age: 23,
    bio: 'Graphic designer with a modern aesthetic 🎨',
    photos: [
      'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400',
      'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400'
    ],
    location: {
      latitude: 37.7849,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    interests: ['graphic design', 'typography', 'branding'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-11-15'),
    updatedAt: new Date('2023-11-15')
  },
  {
    id: '18',
    name: 'Quinn',
    age: 27,
    bio: 'Nurse helping others heal ❤️‍🩹',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400'
    ],
    location: {
      latitude: 37.7649,
      longitude: -122.4094,
      city: 'San Francisco'
    },
    interests: ['healthcare', 'volunteering', 'wellness'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01')
  },
  {
    id: '19',
    name: 'Sage',
    age: 24,
    bio: 'Botanist growing a greener future 🌿',
    photos: [
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?w=400',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    ],
    location: {
      latitude: 37.7549,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    interests: ['botany', 'gardening', 'research'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2023-12-15')
  },
  {
    id: '20',
    name: 'Violet',
    age: 25,
    bio: 'Fashion designer with a love for vintage styles 👗',
    photos: [
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400'
    ],
    location: {
      latitude: 37.7949,
      longitude: -122.4294,
      city: 'San Francisco'
    },
    interests: ['fashion', 'vintage', 'sewing'],
    isActive: true,
    isMatch: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];