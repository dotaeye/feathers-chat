import io from 'socket.io-client';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import config from './config';
import Storage from './utils/Storage';

const socket = io(
  `http${config.secureHttps ? 's' : ''}://${config.host}:${config.port}`,
);
const client = feathers();

client.configure(hooks());
client.configure(socketio(socket));
client.configure(
  authentication({
    storage: Storage,
  }),
);

export default client;
