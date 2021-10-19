import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Orders extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase('../../../database.db3')
  }

  static get tableName() {
    return 'orders'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, not_null: true },
      price: { type: types.FLOAT, not_null: true },
      quantity: { type: types.FLOAT, not_null: true },
      total: { type: types.FLOAT },
      checked_at: { type: types.DATETIME },
      buy_at: { type: types.DATETIME },
      supplier_id: { type: types.NUMERIC },
      purchase_id: { type: types.NUMERIC },
      created_at: { type: types.DATETIME, default: () => Date.now() },
      updated_at: { type: types.DATETIME, default: () => Date.now() }
    }
  }
}

