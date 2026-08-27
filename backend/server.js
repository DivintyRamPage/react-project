require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Дозволяємо запити з фронтенду (React зазвичай на localhost:5173 або localhost:3000)
app.use(cors());
app.use(express.json());

// Всі маршрути авторизації будуть доступні за префіксом /api/auth
// тобто /api/auth/register, /api/auth/login, /api/auth/me
app.use('/api/auth', authRoutes);

// Проста перевірка, що сервер живий
app.get('/', (req, res) => {
  res.json({ status: 'Сервер працює' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});