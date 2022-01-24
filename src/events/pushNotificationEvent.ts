import { Topics } from './topics';

export interface PushNotificationEvent {
  topic: Topics.SendPushNotification;
  data: {
    title: string;
    body: string;
    bottomImage?: string;
    sideImage?: string;
    linkText?: string;
    isRevoked?: boolean;
    broadcastType?: string;
    regionId?: string;
    zoneId?: string;
    icon?: string;
    linkUrl?: string;
    isScheduled?: string;
    targetAudience?: string;
  };
}
