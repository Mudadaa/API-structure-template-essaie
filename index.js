require('dotenv').config();
const http = require('http');
const router = require('./app/routers/router');
const app = require('./app/app');
const express = require('express')
app.use(router);

// On peut également rencontrer un rejet de promesse qui intervient dans un bout de code non
// catcher. Pour cela on se prémunis avec un autre écouteur dédié à ce cas.
process.on('unhandledRejection', (err) => {
  /// celui-ci se contente de renvoiyer la balle à l'écouteur qui gère les erreur non catchées.
  /// Principe de centralisation.
  throw err;
});

const server = http.createServer(app);

const port = process.env.PORT || 5500;

server.listen(port, () => {
  console.log(`Big Brother is watching u  http://localhost:${port}/`);
});

