import { Lot } from 'src/app/core/models';

export interface Cart {
  id: string;
  code: string;
  qty: number;
  lots: Lot[];
}
