require('dotenv');

import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000
});

const plugins = [];

server.register(plugins, err => {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, res) => {
      res.redirect('https://www.twitter.com/francorreasosa?utm_source=fccomuy');
    }
  });

  server.start(err => {
    if (err) throw err;

    server.log(`Listening in ${server.info.host}:${server.info.port}`);
  });
});
