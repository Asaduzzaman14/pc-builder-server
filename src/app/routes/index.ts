import express from 'express';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
