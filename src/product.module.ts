import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class Products {
  constructor() {
    console.log('ProductsModule initialized');
  }
}
