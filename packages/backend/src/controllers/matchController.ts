import { Request, Response } from 'express';
import { MatchService } from '../services/matchService';

export class MatchController {
  private static validateUserId(req: Request, res: Response): string | null {
    const userId = req.headers['x-user-id'] as string;
    
    if (!userId) {
      res.status(400).json({ error: 'User ID required' });
      return null;
    }
    
    return userId;
  }

  static async like(req: Request, res: Response): Promise<void> {
    try {
      const userId = MatchController.validateUserId(req, res);
      if (!userId) return;
      
      const { profileId } = req.body;
      
      if (!profileId) {
        res.status(400).json({ error: 'Profile ID is required' });
        return;
      }

      const result = await MatchService.like(userId, profileId);
      
      res.json({
        status: 'ok',
        isMatch: result.isMatch
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to like profile' });
    }
  }

  static async dislike(req: Request, res: Response): Promise<void> {
    try {
      const userId = MatchController.validateUserId(req, res);
      if (!userId) return;
      
      const { profileId } = req.body;
      
      if (!profileId) {
        res.status(400).json({ error: 'Profile ID is required' });
        return;
      }

      await MatchService.dislike(userId, profileId);
      
      res.json({
        status: 'ok'
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to dislike profile' });
    }
  }
}
