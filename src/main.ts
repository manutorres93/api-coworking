import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Si el usuario envia datos que no corresponden: error
    forbidNonWhitelisted: true, 
    transform: true, //// transforma los datos, si lellega string y necesita number lo transforma
    }
  ))
  
  await app.listen(3000);
}
bootstrap();
