import { Router } from 'express';
import { MatchController } from '../controllers';

const router = Router();

router.post('/like', MatchController.like);
router.post('/dislike', MatchController.dislike);

export { router as matchesRouter };
