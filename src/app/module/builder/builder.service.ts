import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { pcPartsSearchableFields } from '../pcParts/parts.constant';
import { IBuilder, IPcPartsFilterRequest } from './builder.Interface';
import { Builder } from './builder.Modal';

const buildPc = async (paylode: IBuilder): Promise<IBuilder> => {
  console.log(paylode);

  const result = await Builder.create(paylode);
  return result;
};

const getAllBuildPc = async (
  filters: IPcPartsFilterRequest,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IBuilder[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: pcPartsSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andCondation.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortCondations: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortCondations[sortBy] = sortOrder;
  }
  const requestCondetion =
    andCondation.length > 0 ? { $and: andCondation } : {};

  const result = await Builder.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await Builder.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSinglePc = async (id: string): Promise<IBuilder | null> => {
  const result = await Builder.findById(id);
  return result;
};

const updateBuildPcById = async (
  id: string,
  paylode: IBuilder
): Promise<IBuilder | null> => {
  const result = await Builder.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteBuildPc = async (id: string): Promise<IBuilder | null> => {
  const result = await Builder.findByIdAndDelete(id);
  return result;
};

export const pcBuilderServices = {
  buildPc,
  getAllBuildPc,
  getSinglePc,
  updateBuildPcById,
  deleteBuildPc,
};
