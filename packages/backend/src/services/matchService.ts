import { mockProfiles } from '../mock';
import { Match, SwipeAction } from '../types';

export class MatchService {
  static async like(swiperId: string, swipedId: string): Promise<{ isMatch: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const swipe: SwipeAction = {
          id: Date.now().toString(),
          swiperId,
          swipedId,
          action: 'like',
          createdAt: new Date()
        };

        const profile = mockProfiles.find(profile => profile.id === swipedId);
        const isMatch = profile?.isMatch || false;

        resolve({ isMatch });
      }, 100);
    });
  }

  static async dislike(swiperId: string, swipedId: string): Promise<{ swipe: SwipeAction }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const swipe: SwipeAction = {
          id: Date.now().toString(),
          swiperId,
          swipedId,
          action: 'dislike',
          createdAt: new Date()
        };

        resolve({ swipe });
      }, 100);
    });
  }
}
