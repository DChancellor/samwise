require('dotenv').config();

const connection = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
};

module.exports = {
  development: {
    client: 'pg',
    connection,
    migrations: {
      directory: './knex/migrations',
    },
    seeds: {
      directory: './knex/seeds',
    },
  },
  production: {
    client: 'pg',
    connection,
    migrations: {
      directory: './knex/migrations',
    },
    seeds: {
      directory: './knex/seeds',
    },
  },
};
