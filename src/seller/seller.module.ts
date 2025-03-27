import { Module } from '@nestjs/common';
import { SellerProductsService } from './services/seller-products.service';
import { SellerProductsController } from './controllers/seller-products.controller';
import { SellerProductsConsumer } from './consumers/seller-products.consumer';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { rabbitMqConfig } from '../rabbitmq/rabbitmq.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SELLER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: rabbitMqConfig.urls,
          queue: 'seller_queue',
          queueOptions: rabbitMqConfig.queueOptions,
        },
      },
    ]),
  ],
  controllers: [SellerProductsController],
  providers: [SellerProductsService, SellerProductsConsumer],
})
export class SellerModule {}
