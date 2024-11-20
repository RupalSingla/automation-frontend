import { Router } from 'express';
import sessionRoutes from './sessionRoutes';  // Import session-related routes
import cacheRoutes from './cacheRoutes';      // Import cache-related routes

const router = Router();

// Mount session-related routes
router.use('/sessions', sessionRoutes);

// Mount cache-related routes
router.use('/cache', cacheRoutes);

export default router;
