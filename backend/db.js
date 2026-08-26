const Database = require('better-sqlite3');
const path = require('path');

// База даних зберігається у файлі database.sqlite в корені проєкту.
// Це просто локальний файл — при першому запуску він створюється автоматично.
const db = new Database(path.join(__dirname, 'database.sqlite'));

// Створюємо таблицю users, якщо її ще немає
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
