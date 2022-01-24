import { Topics } from './topics';

export interface BulkEmailEvent {
  topic: Topics.SendBulkEmail;
  data: {
    template_id: string;
    recipients: string[];
    variables_json?: any;
    sender?: string;
  };
}
