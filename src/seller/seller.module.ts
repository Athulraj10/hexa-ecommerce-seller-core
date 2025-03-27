import { Module } from '@nestjs/common';
import { SellerController } from './controllers/seller/seller.controller';
import { SellerOrdersController } from './controllers/seller-orders/seller-orders.controller';
import { SellerProductsController } from './controllers/seller-products/seller-products.controller';
import { SellerTransactionsController } from './controllers/seller-transactions/seller-transactions.controller';
import { SellerService } from './services/seller/seller.service';
import { SellerOrdersService } from './services/seller-orders/seller-orders.service';
import { SellerProductsService } from './services/seller-products/seller-products.service';
import { SellerTransactionsService } from './services/seller-transactions/seller-transactions.service';

@Module({
  controllers: [SellerController, SellerOrdersController, SellerProductsController, SellerTransactionsController],
  providers: [SellerService, SellerOrdersService, SellerProductsService, SellerTransactionsService]
})
export class SellerModule {}
