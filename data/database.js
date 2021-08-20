import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import migrations from './migrations'
import { mainSchema } from './schema';

import { Order } from './model/ordersModel';
import { Product } from './model/productsModel';
import { Supplier } from './model/suppliersModel';
import { User } from './model/usersModel';

const adapter = new SQLiteAdapter({
  schema: mainSchema,
  dbName: './database.db3', 
  migrations,
  experimentalUseJSI: false,
});

export const database = new Database({
  adapter,
  modelClasses: [Order, Product, Supplier, User],
  actionsEnabled: true,
});
