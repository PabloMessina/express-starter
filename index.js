'use strict';

const app = require('./app');

app.listen(3000, '0.0.0.0',() => {
  console.log('Example app listening on port 3000!');
});
console.log('Setup complete');
