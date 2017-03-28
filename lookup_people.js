const pg = require('pg');
const settings = require('./settings'); // settings.json

const queryName = process.argv[2];

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

function lookup(name) {
  client.query('SELECT * FROM famous_people WHERE last_name = $1', [name], (err, result) => {
    if (err) {
      return console.error('error running query', err);
    }

    console.log('Searching...');
    console.log('Found ' + result.rowCount + ' person(s) by the name ' + '\'' + name + '\'');
    result.rows.forEach((row) => {
      console.log(`- ${row.id} : ${row.first_name} ${row.last_name}, born '${row.birthdate.toISOString().slice(0, 10)}'`);
    });
    client.end();
  });
}


client.connect((err) => {
  if (err) {
    return console.error('Connection Error', err);
  }
  lookup(queryName);

});