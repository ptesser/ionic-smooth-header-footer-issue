import { Customer } from 'src/app/core/models';

export interface Contract {
  id: string;
  customer: Customer;
  type: string;
  qty: number;
}
