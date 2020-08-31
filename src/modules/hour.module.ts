import { Module, HttpModule } from '@nestjs/common';
import { HourController } from '../controllers/hour.controller';
import { HourService } from '../services/hour.service';

@Module({
  imports: [HttpModule.register({timeout: 5000, maxRedirects: 5})],
  controllers: [HourController],
  providers: [HourService],
})
export class HourModule {}
