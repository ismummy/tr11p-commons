import { Topics } from './topics';
import { Kafka } from 'kafkajs';

interface Event {
  topic: Topics;
  data: any;
}

interface Connection {
  brokers: string[];
  clientId: string;
}

export abstract class Publisher<T extends Event> {
  abstract topic: T['topic'];
  private producer;

  constructor(connection: Connection) {
    const kafka = new Kafka(connection);
    this.producer = kafka.producer();
  }

  async produce(data: T['data']) {
    await this.producer.send({
      topic: this.topic,
      messages: data,
    });
  }
}
