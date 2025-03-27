import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { SellerProductsService } from '../services/seller-products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('seller/products')
export class SellerProductsController {
  constructor(private readonly sellerProductsService: SellerProductsService) {}

  // ✅ Add Product - This sends a message to RabbitMQ
  @Post()
  async addProduct(@Body() createProductDto: CreateProductDto) {
    return await this.sellerProductsService.addProduct(createProductDto);
  }

  // ✅ Get All Products
  @Get()
  async getAllProducts() {
    return await this.sellerProductsService.getAllProducts();
  }

  // ✅ Get Product by ID
  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return await this.sellerProductsService.getProductById(id);
  }

  // ✅ Update Product - Sends update message to RabbitMQ
  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.sellerProductsService.updateProduct(id, updateProductDto);
  }

  // ✅ Delete Product - Sends delete message to RabbitMQ
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.sellerProductsService.deleteProduct(id);
  }
}
