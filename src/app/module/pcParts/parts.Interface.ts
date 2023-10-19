import { Model } from 'mongoose';

export type IPcPart = {
  model: string;
  inputSensitivity: string;
  frequencyResponse: string;
  price: number;
  brand: string;
  type: string;
  systemRequirements: string;
  details: string;
  category: string;
  productId: number;
  img1: string;
  img2: string;
  avgRatings: number;
  status: string;
  reviews: string[];
};

export type PcPartsModal = Model<IPcPart, unknown>;

export type IPcPartsFilterRequest = {
  searchTerm?: string;
};
