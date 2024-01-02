import express from 'express';
import { AuthRoutes } from '../module/auth/auth.routes';
import { BuilderRoutes } from '../module/builder/builder.route';
import { PcPartsRoutes } from '../module/pcParts/parts.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/pc-parts',
    routes: PcPartsRoutes,
  },
  {
    path: '/pc-build',
    routes: BuilderRoutes,
  },
  {
    path: '/auth',
    routes: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
