import { Contract } from './contract';

export enum LotType {
}

export interface Lot {
  id: string;
  type?: LotType;
  pickupDate?: Date;
  deliveryDate?: Date;
  contract?: Contract;
}
