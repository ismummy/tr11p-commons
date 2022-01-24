import { Topics } from './topics';

export interface BulkSMSEvent {
  topic: Topics.SendBulkSMS;
  data: {
    phoneNumber: string[];
    message: string;
  };
}
