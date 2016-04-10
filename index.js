'use strict';

const app = require('./app');

app.listen(3001/*, '0.0.0.0'*/,() => {
  console.log('Example app listening on port 3001!');
});
console.log('Setup complete');
