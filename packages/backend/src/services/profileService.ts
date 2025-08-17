import { mockProfiles } from '../mock';
import { Profile } from '../types';

export class ProfileService {
  static async getAvailableProfiles(excludeIds: string[] = []): Promise<Profile[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const availableProfiles = mockProfiles.filter(p => 
          !excludeIds.includes(p.id) && p.isActive
        );
        resolve(availableProfiles);
      }, 100);
    });
  }
}
