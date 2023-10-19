import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IPcPart, IPcPartsFilterRequest } from './parts.Interface';
import { PcParts } from './parts.Modal';
import { pcPartsSearchableFields } from './parts.constant';

const createParts = async (paylode: IPcPart): Promise<IPcPart> => {
  console.log(paylode);

  const result = await PcParts.create(paylode);
  return result;
};

const getAllParts = async (
  filters: IPcPartsFilterRequest,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IPcPart[]>> => {
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

  const result = await PcParts.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await PcParts.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleparts = async (id: string): Promise<IPcPart | null> => {
  const result = await PcParts.findById(id);
  return result;
};

const updatePartById = async (
  id: string,
  paylode: IPcPart
): Promise<IPcPart | null> => {
  const result = await PcParts.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deletePcParts = async (id: string): Promise<IPcPart | null> => {
  const result = await PcParts.findByIdAndDelete(id);
  return result;
};

export const PcPartsServices = {
  createParts,
  getAllParts,
  getSingleparts,
  updatePartById,
  deletePcParts,
};
