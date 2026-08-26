const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { requireAuth, JWT_SECRET } = require('../middleware/auth');

const router = express.Router();

// ==================== РЕЄСТРАЦІЯ ====================
// POST /api/auth/register
// body: { email, password, name }
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // 1. Перевіряємо, що всі поля передані
    if (!email || !password) {
      return res.status(400).json({ error: 'Email і пароль обов\'язкові' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Пароль має бути не менше 6 символів' });
    }

    // 2. Перевіряємо, чи email вже зайнятий
    const existingUser = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Користувач з таким email вже існує' });
    }

    // 3. Хешуємо пароль — НІКОЛИ не зберігаємо пароль у відкритому вигляді!
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Зберігаємо користувача в базу
    const result = db
      .prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)')
      .run(email, hashedPassword, name || null);

    const userId = result.lastInsertRowid;

    // 5. Одразу видаємо токен, щоб користувач був залогінений після реєстрації
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Реєстрація успішна',
      token,
      user: { id: userId, email, name: name || null }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка сервера при реєстрації' });
  }
});

// ==================== ЛОГІН ====================
// POST /api/auth/login
// body: { email, password }
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email і пароль обов\'язкові' });
    }

    // 1. Шукаємо користувача за email
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    // Навмисно однакове повідомлення і коли email не знайдено, і коли пароль невірний —
    // так зловмисник не може дізнатись, чи існує такий email в базі
    if (!user) {
      return res.status(401).json({ error: 'Невірний email або пароль' });
    }

    // 2. Звіряємо пароль з хешем у базі
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Невірний email або пароль' });
    }

    // 3. Видаємо токен
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Вхід успішний',
      token,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка сервера при вході' });
  }
});

// ==================== ПОТОЧНИЙ КОРИСТУВАЧ ====================
// GET /api/auth/me
// Захищений маршрут — потрібен токен в заголовку Authorization: Bearer <token>
// Використовується, щоб перевірити, чи користувач ще залогінений (наприклад, при завантаженні сторінки)
router.get('/me', requireAuth, (req, res) => {
  const user = db
    .prepare('SELECT id, email, name, created_at FROM users WHERE id = ?')
    .get(req.userId);

  if (!user) {
    return res.status(404).json({ error: 'Користувача не знайдено' });
  }

  res.json({ user });
});

module.exports = router;
