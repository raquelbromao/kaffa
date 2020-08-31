import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class HourService {

  constructor(private httpService: HttpService) {}

  async getApi() {
    const urlWorldClockApi = 'http://worldclockapi.com/api/json/utc/now';

    // Adicionado try e catch devido a API estar fora do ar hj (31/08/2020 16h21)
    try {
    const response = await this.httpService.get(urlWorldClockApi).toPromise();
    return this.formatDate(response.data.currentDateTime);  
    } catch(err) {
      throw new Error(err.message);
    }
  }

  formatDate(date) {
    var dateItens = date.split(/\D+/);
    return `${dateItens[2]}/${dateItens[1]}/${dateItens[0]} ${dateItens[3]}:${dateItens[4]}`;
  }

  getHourUTC() {
    let date = new Date();
    let year =  date.getUTCFullYear();
    let month =  date.getUTCMonth();
    let day =  date.getUTCDay();
    let hour = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    //return new Date().toISOString(); -> na ralidade eu usaria esse, mas como no exerc estava sem os milissegundos então preferi criar na mão
    return `${year}-${month}-${day}T${hour}:${minutes}Z`
  }
}
