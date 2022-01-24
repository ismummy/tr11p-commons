import { Topics } from './topics';
import { Kafka, Message, KafkaMessage } from 'kafkajs';

interface Event {
  topic: Topics;
  data: any;
}

interface Connection {
  brokers: string[];
  clientId: string;
}

export abstract class Listener<T extends Event> {
  abstract topic: T['topic'];

  abstract onMessage(data: T['data']): void;

  private consumer;

  constructor(connection: Connection) {
    const kafka = new Kafka(connection);
    this.consumer = kafka.consumer({ groupId: connection.clientId });
  }

  async listen() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: this.topic });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        this.onMessage(message);
      },
    });
  }
}
