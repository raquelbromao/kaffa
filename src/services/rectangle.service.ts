import { Injectable } from '@nestjs/common';
import { isNullOrUndefined } from 'util';

@Injectable()
export class RectangleService {

  constructor() {}

  isIntersention(points) {
    if (points.length <= 1){
      throw new Error();
    }

    points.forEach(point => { 
      console.log(point.coordinates);
      if (!this.validatePoint(point.coordinates)) {
        throw new Error();
      }

      this.calculateIntersection(point, points);

    })

    return true;
  } 

  validatePoint(coordinates) {
    return !isNullOrUndefined(coordinates.x1) &&
    !isNullOrUndefined(coordinates.y1) &&
    !isNullOrUndefined(coordinates.x2) &&
    !isNullOrUndefined(coordinates.y2);
  }

  calculateIntersection(actualPoint, points) {
    points.forEach(point => {
      
    });
  }

}
