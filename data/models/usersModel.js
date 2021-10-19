import { Model } from '@nozbe/watermelondb';
import { field, relation, children, action, date } from '@nozbe/watermelondb/decorators';

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

  @date('created_at')
  createdAt;

  @date('updated_at')
  updatedAt;
}