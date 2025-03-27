import { Injectable } from '@nestjs/common';
import { InjectRabbitMQ } from '@nestjs-plus/rabbitmq';
import { RabbitMQService } from '../../rabbitmq/rabbitmq.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class SellerProductsService {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  // ✅ Add Product - Publishes a message to RabbitMQ
  async addProduct(createProductDto: CreateProductDto) {
    return this.rabbitMQService.publishMessage('product_queue', 'product.add', createProductDto);
  }

  // ✅ Get All Products (Might be fetched directly from DB)
  async getAllProducts() {
    return this.rabbitMQService.requestData('product_queue', 'product.get_all');
  }

  // ✅ Get Product by ID
  async getProductById(id: string) {
    return this.rabbitMQService.requestData('product_queue', 'product.get', { id });
  }

  // ✅ Update Product
  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return this.rabbitMQService.publishMessage('product_queue', 'product.update', { id, ...updateProductDto });
  }

  // ✅ Delete Product
  async deleteProduct(id: string) {
    return this.rabbitMQService.publishMessage('product_queue', 'product.delete', { id });
  }
}
