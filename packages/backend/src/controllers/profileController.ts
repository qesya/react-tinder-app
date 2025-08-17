import { Request, Response } from 'express';
import { ProfileService } from '../services/profileService';

export class ProfileController {
  static async getAvailableProfiles(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.headers['x-user-id'] as string;
      const excludeIds = userId ? [userId] : [];
      
      const profiles = await ProfileService.getAvailableProfiles(excludeIds);
      res.json(profiles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch profiles' });
    }
  }
}
