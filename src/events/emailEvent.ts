import { Topics } from './topics';

export interface EmailEvent {
  topic: Topics.SendEMail;
  data: {
    template_id: string;
    recipient: string;
    variables_json?: any;
    sender?: string;
  };
}
