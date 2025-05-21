import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';
export var users = mysqlTable('users', {
    id: int('id').primaryKey().autoincrement(),
    username: varchar('username', { length: 255 }).notNull(),
    password: varchar('password', { length: 255 }).notNull()
});
