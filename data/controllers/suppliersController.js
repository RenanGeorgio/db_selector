import {database} from '../database';

export type Supplier = {
  name: string;
  phone_number: string | number | undefined;
  email: string;
  others_contact_info: string | undefined;
  list_products: string | undefined;
  rate: number | undefined;
  locations: string | undefined;
  createdAt?: Date;
  updatedAt?: Date;
};

const suppliers = database.collections.get('suppliers');

export const observeSuppliers = () => suppliers.query().observe();
export const saveSuppliers = async ({name, phone_number, email, others_contact_info, list_products, rate, locations}: Supplier) => {
  await database.action(async () => {
    await suppliers.create((entry) => {
      entry.name = name;
      entry.phone_number = phone_number;
      entry.email = email;
      entry.others_contact_info = others_contact_info;
      entry.list_products = list_products;
      entry.rate = rate;
      entry.locations = locations;
    });
  });
};