import { Controller, Post, Res, Param, HttpStatus, Body} from '@nestjs/common';
import { RectangleService } from '../services/rectangle.service';


@Controller('/rectangle')
export class RectangleController {
  constructor(private readonly rectangleService: RectangleService) {}

  @Post('/intersection')
  findIntersection(@Res() res, @Body() input) {
    if (Array.isArray(input.points)) {
        console.log('é array');
        return this.rectangleService.isIntersention(input.points) ?
            res.status(HttpStatus.OK).json({message: "Is intersection"}) :
            res.status(HttpStatus.NOT_ACCEPTABLE).json({message: "Isn't a intersection"});
    }

    return res.status(HttpStatus.NOT_ACCEPTABLE).json({message: "Error in input"});
  }

  // @Post('/areaIntersection')
  // calculateArea(@Res() res, @Body() points) {
    
  // }
}
