
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const monTable = sqliteTable("mon_table",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text().notNull(),
  isChecked: integer({ mode: 'boolean' }).default(false).notNull()
})