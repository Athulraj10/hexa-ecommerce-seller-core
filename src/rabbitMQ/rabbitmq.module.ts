import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { rabbitMqConfig } from './rabbitmq.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SELLER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: rabbitMqConfig.urls,
          queue: rabbitMqConfig.queues.seller_queue,
          queueOptions: rabbitMqConfig.queueOptions,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMQModule {}
