import { Controller, Get, Response } from '@nestjs/common';
import { GeoJsonExractor } from './app.geojsonextractor.service';

@Controller()
export class AppController {
  constructor(private readonly geojson: GeoJsonExractor) {}

  @Get('yardlocations')
  async getGeoJson(): Promise<any> {
    let res = await this.geojson.extract();

    return res;
  }
}
