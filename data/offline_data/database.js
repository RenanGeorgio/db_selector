/**
 * @format
 */

import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import migrations from './migrations'
import { mainSchema } from './schema';

import { Order } from './models/ordersModel';
import { Product } from './models/productsModel';
import { Supplier } from './models/suppliersModel';
import { User } from './models/usersModel';

const adapter = new SQLiteAdapter({
  schema: mainSchema,
  dbName: 'ClientDB', 
  //migrations,
 // experimentalUseJSI: false,
});

export const database = new Database({
  adapter,
  modelClasses: [Order, Product, Supplier, User],
  //actionsEnabled: true,
});
