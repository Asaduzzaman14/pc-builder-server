import { Model } from 'mongoose';

export type items = {
  Model?: string;
  Brand?: string;
  Details?: string;
  Category?: string;
  img1?: string;
  img2?: string;
  Status?: string;
  Price?: number;
  ProductId?: number;
  AvgRatings?: number;
  Reviews?: string[];
  InputSensitivity?: string;
  FrequencyResponse?: string;
  Type?: string;
  SystemRequirements?: string;
  Capacity?: string;
  Input?: string;
  Output?: string;
  BackupTime?: string;
  Interface?: string;
  Sequential?: string;
  Voltage?: string;
  Frequency?: string;
  Latency?: string;
  Power?: string;
  Fan?: string;
  SensorResolution?: string;
  Weight?: string;
  Keys?: string;
  SupportedCPU?: string;
  SupportedRAM?: string;
  Chipset?: string;
  Slots?: string;
  MaximumMemory?: string;
  Base?: string;
  DisplaySize?: string;
  DisplayType?: string;
  Resolution?: string;
  RefreshRate?: string;
  ResponseTime?: string;
  HotKeys?: string;
  Dimension?: string;
  ClockSpeed?: string;
  Size?: string;
  RecommendedPSU?: string;
  MemoryClock?: string;
  Cores?: string;
  Threads?: string;
  Cache?: string;
  MemoryTypes?: string;
  Speed?: string;
  AirFlow?: string;
  Socket?: string;
};

export type IBuilder = {
  email: string;
  products: items[];
};

export type PcBuilderModal = Model<IBuilder, unknown>;

export type IPcPartsFilterRequest = {
  searchTerm?: string;
};
