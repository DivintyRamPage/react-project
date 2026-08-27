const db = require('./db');

// Вкажіть email, який треба видалити
const emailToDelete = process.argv[2];

if (!emailToDelete) {
    console.log('Вкажіть email: node deleteUser.js example@mail.com');
    process.exit(1);
}

const result = db.prepare('DELETE FROM users WHERE email = ?').run(emailToDelete);

if (result.changes > 0) {
    console.log(`Видалено користувача з email: ${emailToDelete}`);
} else {
    console.log(`Користувача з email "${emailToDelete}" не знайдено`);
}