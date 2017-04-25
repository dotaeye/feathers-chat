const smsCode = require('../../hooks/sms-code');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [smsCode],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
