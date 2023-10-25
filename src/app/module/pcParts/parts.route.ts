import express from 'express';
import { PcPartsController } from './parts.Controller';

const router = express.Router();

router.post('/', PcPartsController.createPcPart);

router.get('/:id', PcPartsController.getPartsById);

router.patch('/:id', PcPartsController.updatePartsById);

router.delete('/:id', PcPartsController.deleteParts);

router.get('/', PcPartsController.getAllParts);

export const AcademicDepartmentRoutes = router;
