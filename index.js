'use strict';

require('dotenv').config();

const { sequelize } = require('./src/models');
const { start } = require('./src/server');
const PORT = process.env.PORT || 5002;

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    start(PORT);
    // app.listen(PORT, () => console.log('server up on port:', PORT));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
