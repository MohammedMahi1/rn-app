
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const monday = sqliteTable("monday",{
  id: int().primaryKey({ autoIncrement: true }),
  task:text().notNull(),
})