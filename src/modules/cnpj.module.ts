import { Module } from '@nestjs/common';
import { CnpjController } from '../controllers/cnpj.controller';
import { CnpjService } from '../services/cnpj.service';

@Module({
  imports: [],
  controllers: [CnpjController],
  providers: [CnpjService],
})
export class CnpjModule {}
