import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

function getOrThrow(key: string) {
   const value = process.env[key];
   if (!value) {
      throw new Error(`No key ${key} found in .env file`);
   }
   return value;
}

export const ormOptions: DataSourceOptions = {
   type: 'postgres',
   host: getOrThrow('PG_HOST'),
   port: +getOrThrow('PG_PORT'),
   username: getOrThrow('PG_USERNAME'),
   password: getOrThrow('PG_PASSWORD'),
   database: getOrThrow('PG_DBNAME'),
   synchronize: false,
   logging: true,
   entities: [path.resolve('dist', '**', '*', '*.entity{.ts,.js}')],
   migrations: [path.resolve('dist', 'migrations', '*{.ts,.js}')]
};

export default new DataSource(ormOptions);
