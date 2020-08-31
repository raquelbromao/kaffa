import { Controller, Get, Res, Param, HttpStatus, Body} from '@nestjs/common';
import { CnpjService } from '../services/cnpj.service';


@Controller('/cnpj')
export class CnpjController {
  constructor(private readonly cnpjService: CnpjService) {}

  @Get('/mask')
  validateMask(@Res() res, @Body() document) {
    let response =  this.cnpjService.validateMask(document.cnpj.trim());
    return res.status(HttpStatus.OK).json({"message": response});
  }

  @Get('/digits')
  validateDigits(@Res() res, @Body() document) {
    let response = this.cnpjService.validateDigits(document.cnpj.trim());
    return res.status(HttpStatus.OK).json({"message": response});
  }
}
