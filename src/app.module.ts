import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './persistence/db-config';
import { User } from './modules/users/entities/user.entity';
import { RoomsModule } from './modules/rooms/rooms.module';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    load: [dbConfig],
    isGlobal: true,
  }),

  TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigType<typeof dbConfig>) => {
      const { db } = configService;

      return {
        type: 'postgres',
        host: db.host,
        port: db.port,
        username: db.user,
        password: db.password,
        database: db.name,
        entities: ['dist/**/*.entity{.ts,.js}', User],
        autoLoadEntities: true,
        synchronize: false,
        retryDelay:3000,
        retryAttempts:10, // Esto no debería estar en producción
        ssl: {
          rejectUnauthorized: false, // Asegúrate de investigar esta opción y ajustarla según sea necesario para producción.
        },
      };
    },
    inject: [dbConfig.KEY]}),
    UsersModule,
    RoomsModule,
    WorkspacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
