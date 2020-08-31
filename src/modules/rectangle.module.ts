import { Module } from '@nestjs/common';
import { RectangleController } from '../controllers/rectangle.controller';
import { RectangleService } from '../services/rectangle.service';

@Module({
  imports: [],
  controllers: [RectangleController],
  providers: [RectangleService],
})
export class RectangleModule {}
