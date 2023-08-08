import type { Knex } from "knex";

// Update with your config settings.

export const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "admin",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      directory: './seeds'
    }
  }
};

export default knexConfig;
