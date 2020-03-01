import { Router } from 'express';
import HealthRoutes from './routes/health';

const router = Router();

HealthRoutes.register(router);

export { router };
