import { Cart, Customer, Job } from 'src/app/core/models';
import { Lot } from './lot';

export interface StageCustomData {
  address?: string;
  lat?: number;
  long?: number;
  customer?: Customer;
  availableLots?: Lot[];
}

export enum StageType {
  Delivery = 'Delivery',
  PickUp = 'Pickup',
  // others?
}

export interface Stage {
  id: string;
  carts: Cart[];
  type: StageType;
  data: StageCustomData;
  jobs: Job[];
  createdAt: Date;
}
