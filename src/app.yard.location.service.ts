import { Injectable } from '@nestjs/common';

@Injectable()
export class YardLocation {
  async getLocations(): Promise<any> {
    const results = await fetch(
      'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Canadian%20National%20Railway%20yard&key=AIzaSyCY-VbTktD4XyY5ba5dh4CXoOotHnj-JRA',
    );

    return await results.json();
  }
}
