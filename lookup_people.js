const settings = require('./settings'); // settings.json
const knex = require('knex')({
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
});

const queryName = process.argv[2];
const query = knex.select().from('famous_people').where('last_name', queryName);

query.then((result) => {
  console.log('Searching...');
  console.log('Found ' + result.length + ' person(s) by the name ' + '\'' + queryName + '\'');
  result.forEach((row) => {
    console.log(`- ${row.id} : ${row.first_name} ${row.last_name}, born '${row.birthdate.toISOString().slice(0, 10)}'`);
  });
  knex.destroy();
});