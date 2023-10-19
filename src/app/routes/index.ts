import express from 'express';
import { AcademicDepartmentRoutes } from '../module/pcParts/parts.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/pc-parts',
    routes: AcademicDepartmentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
