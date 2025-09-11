module.exports = ({ env }) => {
  const isProd = env('NODE_ENV') === 'production';

  if (!isProd) {
    return {
      connection: {
        client: 'sqlite',
        connection: { filename: env('DATABASE_FILENAME', '.tmp/data.db') },
        useNullAsDefault: true,
      },
    };
  }

  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: { rejectUnauthorized: false },
      },
      pool: { min: 0, max: 10 },
    },
  };
};
