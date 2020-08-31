import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './modules/todo.module';
import { HourModule } from './modules/hour.module';
import { CnpjModule } from './modules/cnpj.module';
import { RectangleModule } from './modules/rectangle.module';


@Module({
  imports: [
    TodoModule,
    HourModule,
    CnpjModule,
    RectangleModule,
    MongooseModule.forRoot('mongodb+srv://admin:UoJ7M8nwu3cz3lco@todolistcluster0.v2s1w.mongodb.net/todosDB?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
