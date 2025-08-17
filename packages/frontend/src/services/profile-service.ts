import type { ProfilesResponse } from '@app/utils';
import { apiRequest } from './api-client';

export class ProfileService {
  static async fetchProfiles(limit = 5, cursor?: string): Promise<ProfilesResponse> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('limit', limit.toString());
      if (cursor) {
        queryParams.append('cursor', cursor);
      }

      const endpoint = `/profiles?${queryParams.toString()}`;
      const profiles = await apiRequest(endpoint);

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
  }

}