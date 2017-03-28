const settings = require('./settings'); // settings.json
// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    },
    searchPath: 'public'
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};