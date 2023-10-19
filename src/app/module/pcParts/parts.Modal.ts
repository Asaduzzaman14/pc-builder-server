import { Schema, model } from 'mongoose';
import { IPcPart, PcPartsModal } from './parts.Interface';

const PcPartsSchema = new Schema<IPcPart, PcPartsModal>(
  {
    model: {
      type: String,
      required: true,
    },
    inputSensitivity: {
      type: String,
      required: true,
    },
    frequencyResponse: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    systemRequirements: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    avgRatings: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    reviews: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const PcParts = model<IPcPart, PcPartsModal>('pc-parts', PcPartsSchema);
