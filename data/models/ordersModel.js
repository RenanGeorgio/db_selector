import { Model } from '@nozbe/watermelondb';
import { field, relation, children, action, date } from '@nozbe/watermelondb/decorators';

export class Order extends Model {
  static table = 'orders';

  static associations = {
    suppliers: { type: 'belongs_to', key: 'supplier_id' },
    products: { type: 'belongs_to', key: 'purchase_id' },
  };

  @field('name')
  name;

  @field('category')
  category;

  @field('price')
  price;

  @field('quantity')
  quantity;

  @field('total')
  total;

  @date('checked_at')
  checkedAt;

  @date('buy_at')
  buyAt;

  @relation('suppliers', 'supplier_id')
  supplier;

  @relation('products', 'purchase_id')
  product;

  @date('created_at')
  createdAt;

  @date('updated_at')
  updatedAt;
}