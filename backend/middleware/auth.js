const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

// Ця функція перевіряє, чи користувач авторизований (чи має валідний токен)
// Використовується на маршрутах, куди можна заходити тільки залогіненим
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization; // очікуємо "Bearer <token>"

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Немає токена авторизації' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // зберігаємо id користувача для наступних обробників
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Токен недійсний або протермінований' });
  }
}

module.exports = { requireAuth, JWT_SECRET };
