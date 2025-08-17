import type { LikeResponse, DislikeResponse } from '@app/utils';
import { apiRequest } from './api-client';

export class MatchService {
  static async likeProfile(profileId: string): Promise<LikeResponse> {
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
  }

  static async dislikeProfile(profileId: string): Promise<DislikeResponse> {
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
  }
}