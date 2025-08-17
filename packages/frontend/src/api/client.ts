import type { DislikeResponse, LikeResponse, ProfilesResponse } from "@app/utils";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
const USER_ID = 'current-user'; 

const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'x-user-id': USER_ID,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const fetchProfiles = async (_limit = 5, _cursor?: string): Promise<ProfilesResponse> => {
  try {
    const profiles = await apiRequest(`/profiles`);

    console.log('Fetched profiles:', profiles);

    return {
      data: profiles,
      nextCursor: undefined
    };
  } catch (error) {
    console.error('Failed to fetch profiles:', error);
    return {
      data: [],
      nextCursor: undefined
    };
  }
};

export const likeProfile = async (profileId: string): Promise<LikeResponse> => {
  try {
    const result = await apiRequest('/matches/like', {
      method: 'POST',
      body: JSON.stringify({
        profileId: profileId
      })
    });

    return {
      status: 'ok',
      isMatch: result.isMatch
    };
  } catch (error) {
    console.error('Failed to like profile:', error);
    return {
      status: 'ok',
      isMatch: Math.random() < 0.3
    };
  }
};

export const dislikeProfile = async (profileId: string): Promise<DislikeResponse> => {
  try {
    await apiRequest('/matches/dislike', {
      method: 'POST',
      body: JSON.stringify({
        profileId: profileId
      })
    });

    return {
      status: 'ok'
    };
  } catch (error) {
    console.error('Failed to dislike profile:', error);
    return {
      status: 'ok'
    };
  }
};
