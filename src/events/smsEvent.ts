import { Topics } from './topics';

export interface SmsEvent {
  topic: Topics.SendSMS;
  data: {
    phoneNumber: string;
    message: string;
  };
}
