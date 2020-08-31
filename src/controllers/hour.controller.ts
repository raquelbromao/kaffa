import { Controller, Get, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { HourService } from '../services/hour.service';


@Controller('/hour')
export class HourController {
  constructor(private readonly hourService: HourService) {}

  @Get('/client')
  async getClient(@Res() res) {
    const hour = await this.hourService.getApi();
    if (!hour) throw new NotFoundException('currentDateTime does not exist!');
    return res.status(HttpStatus.OK).json({data: hour});
  }

  @Get('/server')
  async getServerHour(@Res() res) {
    const hour = this.hourService.getHourUTC();
    return res.status(HttpStatus.OK).json({currentDateTime: hour});
  }
}
