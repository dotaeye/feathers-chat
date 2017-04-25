'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('verificationCode service', function() {
  it('registered the verificationCodes service', () => {
    assert.ok(app.service('verificationCodes'));
  });
});
