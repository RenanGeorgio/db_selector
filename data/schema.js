import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'orders',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'price', type: 'number' },
        { name: 'quantity', type: 'number' },
        { name: 'total', type: 'number', isOptional: true },
        { name: 'checked_at', type: 'number' },
        { name: 'buy_at', type: 'number' },
        { name: 'supplier_id', type: 'string', isIndexed: true },
        { name: 'purchase_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'products',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'price', type: 'number' },
        { name: 'quantity', type: 'number' },
        { name: 'supplier', type: 'string' },
        { name: 'location', type: 'string', isOptional: true },
        { name: 'buy_at', type: 'number' },
        { name: 'supplier_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'suppliers',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'phone_number', type: 'string', isOptional: true },
        { name: 'email', type: 'string', isOptional: true },
        { name: 'others_contact_info', type: 'string', isOptional: true },
        { name: 'list_products', type: 'string', isOptional: true }
        { name: 'rate', type: 'number', isOptional: true },
        { name: 'locations', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'users',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'phone_number', type: 'string', isOptional: true },
        { name: 'email', type: 'string', isOptional: true },
        { name: 'role', type: 'string' },
        { name: 'password', type: 'string'},
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
  ]
})