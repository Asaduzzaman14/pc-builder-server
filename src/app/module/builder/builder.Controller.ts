import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IBuilder } from './builder.Interface';
import { pcPartsFilterableFields } from './builder.constant';
import { pcBuilderServices } from './builder.service';

const buildPc = catchAsync(async (req: Request, res: Response) => {
  const { ...partsData } = req.body;
  // console.log(partsData, 'this is data');

  const result = await pcBuilderServices.buildPc(partsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Pc Created Successfully',
    data: result,
  });
});

//  get All Parts

const getAllBuildPc = catchAsync(async (req: Request, res: Response) => {
  const query = req?.query;

  const paginationOptions = pick(query, paginationFields);
  const filters = pick(query, pcPartsFilterableFields);

  const result = await pcBuilderServices.getAllBuildPc(
    filters,
    paginationOptions
  );
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Pc Retrieved  Succesfully',
    data: result.data,
  });
});
const getSinglePc = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await pcBuilderServices.getSinglePc(id);

  sendResponse<IBuilder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Build pc Retrieved Successfully',
    data: result,
  });
});

// // update Parts By Id
const updateBuildPcById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await pcBuilderServices.updateBuildPcById(id, updatedData);

  sendResponse<IBuilder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Build pc successfully updated',
    data: result,
  });
});

// // Delete Parts
const deleteBuildPc = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await pcBuilderServices.deleteBuildPc(id);

  sendResponse<IBuilder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Build Pc deleted Successfully',
    data: result,
  });
});

export const builderController = {
  buildPc,
  getAllBuildPc,
  getSinglePc,
  updateBuildPcById,
  deleteBuildPc,
};
