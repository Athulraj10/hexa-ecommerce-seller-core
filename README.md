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
