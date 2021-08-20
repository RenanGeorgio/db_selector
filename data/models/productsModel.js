import { Model } from '@nozbe/watermelondb';
import { field, relation, children, action } from '@nozbe/watermelondb/decorators';

export class Product extends Model {
  static table = 'products';

  static associations = {
    suppliers: { type: 'belongs_to', key: 'supplier_id' },
    orders: { type: 'has_many', foreignKey: 'purchase_id' },
  };

  @field('name')
  name;

  @field('category')
  category;

  @field('price')
  price;

  @field('quantity')
  quantity;

  @field('supplier')
  supplier;

  @field('location')
  location;

  @date('buy_at')
  buyAt;

  @relation('suppliers', 'supplier_id')
  supplier;

  @date('created_at')
  createdAt;

  @date('updated_at')
  updatedAt;

  @children('orders')
  orders;
}