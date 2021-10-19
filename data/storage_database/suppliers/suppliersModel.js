import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Suppliers extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase('../../../database.db3')
  }

  static get tableName() {
    return 'suppliers'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, not_null: true },
      phone_number: { type: types.NUMERIC },
      email: { type: types.TEXT },
      others_contact_info: { type: types.JSON },
      list_products: { type: types.TEXT },
      rate: { type: types.FLOAT },
      locations: { type: types.TEXT },
      created_at: { type: types.DATETIME, default: () => Date.now() },
      updated_at: { type: types.DATETIME, default: () => Date.now() }
    }
  }
}
