module.exports = ({ env }) => {
  const isProd = env('NODE_ENV') === 'production' || !!env('DATABASE_URL');

  if (isProd) {
    const ssl = env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false;
    const url = env('DATABASE_URL');
    return {
      connection: {
        client: 'postgres',
        connection: url
          ? { connectionString: url, ssl }
          : {
              host: env('PGHOST', '127.0.0.1'),
              port: env.int('PGPORT', 5432),
              database: env('PGDATABASE', 'strapi'),
              user: env('PGUSER', 'postgres'),
              password: env('PGPASSWORD', ''),
              ssl,
            },
        pool: { min: 0, max: 10 },
      },
    };
  }

  return {
    connection: {
      client: 'sqlite',
      connection: { filename: env('SQLITE_FILENAME', '.tmp/data.db') },
      useNullAsDefault: true,
    },
  };
};
