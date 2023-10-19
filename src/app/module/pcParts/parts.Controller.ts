import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IPcPart } from './parts.Interface';
import { pcPartsFilterableFields } from './parts.constant';
import { PcPartsServices } from './parts.service';

const createPcPart = catchAsync(async (req: Request, res: Response) => {
  const { ...partsData } = req.body;
  // console.log(partsData, 'this is data');

  const result = await PcPartsServices.createParts(partsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Parts Created Successfully',
    data: result,
  });
});

//  get All Partss

const getAllParts = catchAsync(async (req: Request, res: Response) => {
  const query = req?.query;

  const paginationOptions = pick(query, paginationFields);
  const filters = pick(query, pcPartsFilterableFields);

  const result = await PcPartsServices.getAllParts(filters, paginationOptions);
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Partss Retrieved  Succesfully',
    data: result.data,
  });
});
const getPartsById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PcPartsServices.getSingleparts(id);

  sendResponse<IPcPart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Parts Retrieved Successfully',
    data: result,
  });
});

// // update Parts By Id
const updatePartsById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await PcPartsServices.updatePartById(id, updatedData);

  sendResponse<IPcPart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Part successfully updated',
    data: result,
  });
});

// // Delete Parts
const deleteParts = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PcPartsServices.deletePcParts(id);

  sendResponse<IPcPart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Pc part deleted Successfully',
    data: result,
  });
});

export const PcPartsController = {
  createPcPart,
  getAllParts,
  getPartsById,
  updatePartsById,
  deleteParts,
};
