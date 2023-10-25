import express from 'express';
import { builderController } from './builder.Controller';

const router = express.Router();

router.post('/', builderController.buildPc);

router.get('/:id', builderController.getSinglePc);

router.patch('/:id', builderController.updateBuildPcById);

router.delete('/:id', builderController.deleteBuildPc);

router.get('/', builderController.getAllBuildPc);

export const BuilderRoutes = router;
