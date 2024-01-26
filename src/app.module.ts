import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YardLocation } from './app.yard.location.service';
import { GeoJsonExractor } from './app.geojsonextractor.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, YardLocation, GeoJsonExractor],
})
export class AppModule {}
