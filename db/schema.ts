
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const monTable = sqliteTable("mon_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})
export const tuesTable = sqliteTable("tues_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})
export const therTable = sqliteTable("ther_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})
export const widnTable = sqliteTable("widn_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})
export const friTable = sqliteTable("fri_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})
export const saturTable = sqliteTable("satur_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})
export const sunTable = sqliteTable("sun_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text(),
  isChecked: integer({ mode: 'boolean' }).default(false)
})