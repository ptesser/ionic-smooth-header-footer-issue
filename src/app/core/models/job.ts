import { Worker } from 'src/app/core/models';

export interface Job {
  worker: Worker;
  start?: Date;
  stop?: Date;
  complete: boolean;
  failure?: boolean;
  note?: string;
}
