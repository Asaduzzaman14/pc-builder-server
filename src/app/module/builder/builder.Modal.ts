import { Schema, model } from 'mongoose';
import { IBuilder, PcBuilderModal } from './builder.Interface';

const PcPartsSchema = new Schema<IBuilder, PcBuilderModal>(
  {
    Model: {
      type: String,
      required: [true, 'Model name is required'],
      index: true,
    },
    Brand: {
      type: String,
      required: [true, 'Brand name is required'],
    },
    Details: {
      type: String,
      required: [true, 'Details is required'],
    },
    Category: {
      type: String,
      required: [true, 'Category is required'],
      index: true,
    },
    img1: {
      type: String,
      required: [true, 'Image 1 is required'],
    },
    img2: {
      type: String,
      required: [true, 'Image 2 is required'],
    },
    Status: {
      type: String,
      required: [true, 'Status is required'],
      index: true,
    },
    Price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    ProductId: {
      type: Number,
      required: [true, 'Product ID is required'],
    },
    AvgRatings: {
      type: Number,
      required: [true, 'Average Ratings are required'],
    },
    Reviews: {
      type: [String],
    },
    InputSensitivity: {
      type: String,
    },
    FrequencyResponse: {
      type: String,
    },
    Type: {
      type: String,
    },
    SystemRequirements: {
      type: String,
    },
    Capacity: {
      type: String,
    },
    Input: {
      type: String,
    },
    Output: {
      type: String,
    },
    BackupTime: {
      type: String,
    },
    Interface: {
      type: String,
    },
    Sequential: {
      type: String,
    },
    Voltage: {
      type: String,
    },
    Frequency: {
      type: String,
    },
    Latency: {
      type: String,
    },
    Power: {
      type: String,
    },
    Fan: {
      type: String,
    },
    SensorResolution: {
      type: String,
    },
    Weight: {
      type: String,
    },
    Keys: {
      type: String,
    },
    SupportedCPU: {
      type: String,
    },
    SupportedRAM: {
      type: String,
    },
    Chipset: {
      type: String,
    },
    Slots: {
      type: String,
    },
    MaximumMemory: {
      type: String,
    },
    Base: {
      type: String,
    },
    DisplaySize: {
      type: String,
    },
    DisplayType: {
      type: String,
    }, // Moved DisplayType to its own object
    Resolution: {
      type: String,
    },
    RefreshRate: {
      type: String,
    },
    ResponseTime: {
      type: String,
    },
    HotKeys: {
      type: String,
    },
    Dimension: {
      type: String,
    },
    ClockSpeed: {
      type: String,
    },
    Size: {
      type: String,
    },
    RecommendedPSU: {
      type: String,
    },
    MemoryClock: {
      type: String,
    },
    Cores: {
      type: String,
    },
    Threads: {
      type: String,
    },
    Cache: {
      type: String,
    },
    MemoryTypes: {
      type: String,
    },
    Speed: {
      type: String,
    },
    AirFlow: {
      type: String,
    },
    Socket: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Builder = model<IBuilder, PcBuilderModal>(
  'categorys',
  PcPartsSchema
);
