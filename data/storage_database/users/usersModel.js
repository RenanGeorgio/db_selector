import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Users extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase('../../../database.db3')
  }

  static get tableName() {
    return 'users'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, not_null: true },
      email: { type: types.TEXT },
      role: { type: types.TEXT },
      password: { type: types.TEXT },
      created_at: { type: types.DATETIME, default: () => Date.now() },
      updated_at: { type: types.DATETIME, default: () => Date.now() }
    }
  }
}

