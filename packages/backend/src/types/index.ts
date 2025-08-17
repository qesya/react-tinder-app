export interface Profile {
  id: string;
  name: string;
  age: number;
  bio?: string;
  photos: string[];
  location?: {
    latitude: number;
    longitude: number;
    city?: string;
  };
  interests?: string[];
  isActive: boolean;
  isMatch?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Match {
  id: string;
  profileId1: string;
  profileId2: string;
  isMatched: boolean;
  createdAt: Date;
}

export interface SwipeAction {
  id: string;
  swiperId: string;
  swipedId: string;
  action: 'like' | 'dislike';
  createdAt: Date;
}

export interface CreateProfileRequest {
  name: string;
  age: number;
  bio?: string;
  photos: string[];
  location?: {
    latitude: number;
    longitude: number;
    city?: string;
  };
  interests?: string[];
}

export interface SwipeRequest {
  swipedId: string;
  action: 'like' | 'dislike';
}
