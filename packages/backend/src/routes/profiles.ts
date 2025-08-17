import { Router } from 'express';
import { ProfileController } from '../controllers';

const router = Router();

router.get('/', ProfileController.getAvailableProfiles);

export { router as profilesRouter };
