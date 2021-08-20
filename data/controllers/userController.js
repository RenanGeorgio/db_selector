import {database} from '../database';

export type User = {
  name: string;
  phone_number: string | number | undefined;
  email: string | undefined;
  role: string | undefined;
  password: string | number;
  createdAt?: Date;
  updatedAt?: Date;
};

const users = database.collections.get('users');

export const observeUsers = () => users.query().observe();
export const saveUsers = async ({name, phone_number, email, role, password}: User) => {
  await database.action(async () => {
    await users.create((entry) => {
      entry.name = name;
      entry.phone_number = phone_number;
      entry.email = email;
      entry.role = role;
      entry.password = password;
    });
  });
};