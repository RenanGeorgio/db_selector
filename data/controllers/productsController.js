import {database} from '../database';

export type Product = {
  name: string;
  category: string;
  price: number;
  quantity: number;
  supplier: string;
  location: string | undefined;
  buyAt: Date;
  supplier_id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
};

const products = database.collections.get('products');

export const observeProducts = () => products.query().observe();
export const saveProducts = async ({name, category, price, quantity, supplier, location, buyAt, supplier_id}: Product) => {
  await database.action(async () => {
    await products.create((entry) => {
      entry.name = name;
      entry.category =  category;
      entry.price = price;
      entry.quantity = quantity;
      entry.supplier = supplier;
      entry.location = location;
      entry.buyAt = buyAt;
      entry.supplier_id = supplier_id;
    });
  });
};