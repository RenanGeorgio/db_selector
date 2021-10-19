import { Model } from '@nozbe/watermelondb';
import { field, relation, children, action, date, json } from '@nozbe/watermelondb/decorators';

export class Supplier extends Model {
  static table = 'suppliers';

  static associations = {
    orders: { type: 'has_many', foreignKey: 'supplier_id' },
    products: { type: 'has_many', foreignKey: 'supplier_id' },
  };

  @field('name')
  name;

  @field('phone_number')
  phone_number;

  @field('email')
  email;

  @json('others_contact_info')
  others_contact_info;

  @json('list_products')
  list_products;

  @field('rate')
  rate;

  @field('locations')
  locations;

  @date('created_at')
  createdAt;

  @date('updated_at')
  updatedAt;

  @children('orders')
  orders;

  @children('products')
  projects;
}