'use strict';;
const users = require('./users/users.service.js');

const messages = require('./messages/messages.service.js');

const verificationCode = require('./verification-code/verification-code.service.js');

const todo = require('./todo/todo.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars

  app.configure(users);
  app.configure(messages);
  app.configure(verificationCode);
  app.configure(todo);
};