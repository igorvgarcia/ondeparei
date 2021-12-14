// Update with your config settings.

module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite'
      },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  
    staging: {
      client: 'pg',
      connection: {
        database: 'my_db',
        user:     'postgres',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
      }
    },
  
    production: {
      client: 'pg',
      connection: {
        database: 'my_db',
        user:     'postgres',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
      }
    }
  
  };
  