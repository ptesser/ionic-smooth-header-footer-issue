import { User } from 'src/app/core/models';

export interface Notification {
  id: string;
  note: string;
  user: User;
}
