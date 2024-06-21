import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Si el usuario envia datos que no corresponden: error
    forbidNonWhitelisted: true, 
    transform: true, //// transforma los datos, si lellega string y necesita number lo transforma
    }
  ))

  const config = new DocumentBuilder()
  .setTitle('API riwi coworking')
  .setDescription('Documentation for API coworking')
  .setVersion('1.0')
  .addTag('rooms')
  .addTag('users')
  .addTag('reservations')
  .addTag('sessions')
  .addTag('workspaces')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-documentation', app, document);
  
  await app.listen(3000);
}
bootstrap();
