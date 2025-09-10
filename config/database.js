module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: { rejectUnauthorized: false }, // <<< важно для Railway Postgres
    },
    pool: { min: 0, max: 10 },
  },
});
