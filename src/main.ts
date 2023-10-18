import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import * as cors from 'cors';
import * as express from 'express';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(cors());
  app.use('/uploads_event', express.static(join(__dirname,'..','/uploads_event')));
  app.use('/uploads_avatar', express.static(join(__dirname,'..','/uploads_avatars')));

  await app.listen(5000);
}
bootstrap();
