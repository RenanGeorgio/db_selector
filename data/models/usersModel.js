import { Model } from '@nozbe/watermelondb';
import { field, relation, children, action } from '@nozbe/watermelondb/decorators';

export class User extends Model {
  static table = 'users';

  @field('name')
  name;

  @field('phone_number')
  phone_number;

  @field('email')
  email;

  @field('role')
  role;

  @field('password')
  password;

  @data('created_at')
  createdAt;

  @data('updated_at')
  updatedAt;
}