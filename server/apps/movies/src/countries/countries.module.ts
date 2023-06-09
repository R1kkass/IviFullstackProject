import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Countries } from './countries.model';
import { CountriesFilms } from './countries.m2m.model';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [
    CacheModule.register({
      ttl: 5000,
    }),
    SequelizeModule.forFeature([Countries, CountriesFilms]),
  ],
  exports: [CountriesService],
})
export class CountriesModule {}
