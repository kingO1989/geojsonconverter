import { Injectable } from '@nestjs/common';
import { YardLocation } from './app.yard.location.service';

@Injectable()
export class GeoJsonExractor {
  constructor(private readonly fetcheddata: YardLocation) {}
  async extract(): Promise<any> {
    let features = [];
    const response = await this.fetcheddata.getLocations();
    response.results.map((locale) => {
      let type = 'Feature';
      let geometry = {
        type: 'Point',
        coordinates: [
          locale.geometry.location.lng,
          locale.geometry.location.lat,
        ],
      };
      let name = locale.name;
      let address = locale.formatted_address;
      let properties = {
        name,
        address,
      };

      features.push({ type, geometry, properties });
    });

    return {
      type: 'FeatureCollection',
      features,
    };
  }
}
