import {database} from '../database';

export type Order = {
  name: string;
  category: string;
  price: number;
  quantity: number;
  total: number | undefined;
  checkedAt: Date;
  buyAt: Date;
  supplier_id: string | number;
  purchase_id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
};

const orders = database.collections.get('orders');

export const observeOrders = () => orders.query().observe();
export const saveOrders = async ({name, price, quantity, checkedAt, buyAt, supplier_id, purchase_id}: Order) => {
  await database.action(async () => {
    await orders.create((entry) => {
      entry.name = name;
      entry.price = price;
      entry.quantity = quantity;
      entry.total = price * quantity;
      entry.checkedAt = checkedAt;
      entry.buyAt = buyAt;
      entry.supplier_id = supplier_id;
      entry.purchase_id = purchase_id;
    });
  });
};