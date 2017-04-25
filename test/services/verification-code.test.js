const assert = require('assert');
const app = require('../../src/app');

describe('\'verification-code\' service', () => {
  it('registered the service', () => {
    const service = app.service('verification-code');

    assert.ok(service, 'Registered the service');
  });
});
