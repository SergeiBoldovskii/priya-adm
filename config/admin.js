module.exports = ({ env }) => ({
  auth: {
    // секрет админ-панели берём из переменной окружения
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    // соль для API токенов
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      // соль для transfer tokens (импорт/экспорт контента)
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
