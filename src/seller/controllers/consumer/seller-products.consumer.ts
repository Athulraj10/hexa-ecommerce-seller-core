import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class SellerProductsConsumer {
  // ✅ Listen for "product.add" event from RabbitMQ
  @EventPattern('product.add')
  async handleAddProduct(@Payload() data: any) {
    console.log('Received product.add event:', data);
    // Process product addition (e.g., save to DB)
  }

  // ✅ Listen for "product.update" event from RabbitMQ
  @EventPattern('product.update')
  async handleUpdateProduct(@Payload() data: any) {
    console.log('Received product.update event:', data);
    // Process product update logic
  }

  // ✅ Listen for "product.delete" event from RabbitMQ
  @EventPattern('product.delete')
  async handleDeleteProduct(@Payload() data: any) {
    console.log('Received product.delete event:', data);
    // Process product deletion
  }
}
