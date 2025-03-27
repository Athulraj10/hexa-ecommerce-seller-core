# Generate main seller module
nest g module seller

# Generate controllers
nest g controller seller/controllers/seller --no-spec
nest g controller seller/controllers/seller-orders --no-spec
nest g controller seller/controllers/seller-products --no-spec
nest g controller seller/controllers/seller-transactions --no-spec

# Generate services
nest g service seller/services/seller --no-spec
nest g service seller/services/seller-orders --no-spec
nest g service seller/services/seller-products --no-spec
nest g service seller/services/seller-transactions --no-spec

# Generate repositories (Optional if using TypeORM directly)
mkdir -p src/seller/repositories
touch src/seller/repositories/seller.repository.ts
touch src/seller/repositories/seller-orders.repository.ts
touch src/seller/repositories/seller-products.repository.ts
touch src/seller/repositories/seller-transactions.repository.ts

# Generate DTOs
mkdir -p src/seller/dto
touch src/seller/dto/create-seller.dto.ts
touch src/seller/dto/update-seller.dto.ts
touch src/seller/dto/seller-login.dto.ts
touch src/seller/dto/seller-order.dto.ts
touch src/seller/dto/seller-product.dto.ts
touch src/seller/dto/seller-transaction.dto.ts

# Generate Entities (for TypeORM)
mkdir -p src/seller/entities
touch src/seller/entities/seller.entity.ts
touch src/seller/entities/seller-orders.entity.ts
touch src/seller/entities/seller-products.entity.ts
touch src/seller/entities/seller-transactions.entity.ts

# Generate Interfaces (if needed)
mkdir -p src/seller/interfaces
touch src/seller/interfaces/seller.interface.ts
touch src/seller/interfaces/seller-orders.interface.ts
touch src/seller/interfaces/seller-products.interface.ts
touch src/seller/interfaces/seller-transactions.interface.ts


src/
 ├── seller/  📁 (Main seller module)
 │   ├── controllers/
 │   │   ├── seller.controller.ts
 │   │   ├── seller-orders.controller.ts
 │   │   ├── seller-products.controller.ts
 │   │   ├── seller-transactions.controller.ts
 │   │
 │   ├── services/
 │   │   ├── seller.service.ts
 │   │   ├── seller-orders.service.ts
 │   │   ├── seller-products.service.ts
 │   │   ├── seller-transactions.service.ts
 │   │
 │   ├── repositories/
 │   │   ├── seller.repository.ts
 │   │   ├── seller-orders.repository.ts
 │   │   ├── seller-products.repository.ts
 │   │   ├── seller-transactions.repository.ts
 │   │
 │   ├── dto/
 │   │   ├── create-seller.dto.ts
 │   │   ├── update-seller.dto.ts
 │   │   ├── seller-login.dto.ts
 │   │   ├── seller-order.dto.ts
 │   │   ├── seller-product.dto.ts
 │   │   ├── seller-transaction.dto.ts
 │   │
 │   ├── entities/
 │   │   ├── seller.entity.ts
 │   │   ├── seller-orders.entity.ts
 │   │   ├── seller-products.entity.ts
 │   │   ├── seller-transactions.entity.ts
 │   │
 │   ├── interfaces/
 │   │   ├── seller.interface.ts
 │   │   ├── seller-orders.interface.ts
 │   │   ├── seller-products.interface.ts
 │   │   ├── seller-transactions.interface.ts
 │   │
 │   ├── seller.module.ts (Main seller module)
 │
 ├── app.module.ts
