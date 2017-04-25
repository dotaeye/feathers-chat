const { authenticate } = require('feathers-authentication').hooks;
const { restrictToAuthenticated } = require('feathers-authentication-hooks');
const { discard, iff } = require('feathers-hooks-common');
const { hashPassword } = require('feathers-authentication-local').hooks;
const validateCode = require('../../hooks/validate-code.js');
const confirmPassword = require('../../hooks/confirm-password.js');
const setQuery = require('../../hooks/set-query.js');
const { isAction } = require('../../utils');

module.exports = app => {
  const codeType = app.get('codeType');
  return {
    before: {
      all: [],
      find: [],
      get: [],
      create: [
        validateCode({
          codeType: codeType.register
        }),
        discard('code')
      ],
      update: [],
      patch: [
        iff(isAction('setPassword'), authenticate('jwt'), hashPassword()),
        iff(
          isAction('changePassword'),
          authenticate('jwt'),
          restrictToAuthenticated(), // 检查是否查询成功
          // 对比旧密码，对比confirmPassword
          confirmPassword,
          hashPassword(),
          discard('action')
        ),
        iff(
          isAction('forgetPassword'),
          validateCode({
            codeType: codeType.forgetPassword
          }),
          hashPassword(),
          setQuery([
            {
              idField: 'phone',
              dataField: 'phone'
            }
          ]),
          discard('action')
        )
      ],
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
};
