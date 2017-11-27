require('dotenv');

import Hapi from 'hapi';
import Path from 'path';

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'static')
      }
    }
  }
});

server.connection({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 5000
});

const plugins = [require('vision'), require('inert')];

server.register(plugins, err => {
  if (err) throw err;

  server.views({
    engines: { pug: require('pug') },
    path: __dirname + '/templates',
    compileOptions: { pretty: process.env.NODE_ENV !== 'production' }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, res) => {
      res.view('index');
    }
  });

  server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.start(err => {
    if (err) throw err;

    server.log(`Listening in ${server.info.host}:${server.info.port}`);
  });
});
