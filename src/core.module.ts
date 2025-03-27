import { Module } from "@nestjs/common";
import { RabbitMQModule } from "./rabbitMQ/rabbitmq.module";
import { DatabaseModule } from "./database/database.module";

@Module({
    imports: [
        RabbitMQModule,
        DatabaseModule,
    ],
    controllers: [],
    providers: [],
})

export class CoreModule {
    constructor(){
        console.log('CoreModule initialized');
    }
}