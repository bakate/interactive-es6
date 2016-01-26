import chokidarEvEmitter from 'chokidar-socket-emitter';
import httpServer from 'http-server';
import getPort from 'getport';
import open from 'opn';
import 'colors';

const server = httpServer.createServer({
  root: '.',
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})

chokidarEvEmitter({ app: server.server });

getPort(8090, function(err, port) {
  if (err) throw err;
  server.listen(port, function() {
    console.log('Listening on port', String(port).cyan);
    open('http://localhost:' + port, { wait: false });
  });
});
