import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import level = require('level');

export const levelDatabase = level('mydb', {
  valueEncoding: 'json',
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
