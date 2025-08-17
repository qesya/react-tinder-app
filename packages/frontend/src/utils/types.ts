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
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfilesResponse {
  data: Profile[];
  nextCursor?: string;
}

export interface LikeResponse {
  status: "ok";
  isMatch: boolean;
}

export interface DislikeResponse {
  status: "ok";
}