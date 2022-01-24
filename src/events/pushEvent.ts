import { Topics } from './topics';

export interface PushEvent {
  topic: Topics.SendPushEvent;
  data: {
    message: string;
    channel: string;
    subscribeKey: string;
    publishKey: string;
  };
}
