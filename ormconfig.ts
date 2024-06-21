
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'b3k8xtdhqsupcg0esadt-postgresql.services.clever-cloud.com',
  port: 50013,
  username: 'uyb0hbusjmsyyetrvhy8',
  password: 'vwKGwz1fpZ2MtwmUeQxknQslizTRuE',
  database: 'b3k8xtdhqsupcg0esadt',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // solo para pruebas, no en producción
});