"use strict";

const authentication = require("feathers-authentication");
const jwt = require("feathers-authentication-jwt");
const local = require("feathers-authentication-local");
const errors = require("feathers-errors");

class CustomVerifier extends local.Verifier {
  // The verify function has the exact same inputs and
  // return values as a vanilla passport strategy
  async verify(req, username, password, done) {
    const { type } = req.body;
    if (type === "password") {
      super.verify(req, username, password, done);
    } else {
      const users = await this.app.service("users").find({
        query: {
          $limit: 1,
          phone: username
        }
      });
      const loginUser = users.data[0];
      if (loginUser) {
        const codes = await this.app.service("verification-code").find({
          query: {
            phone: username,
            code: password,
            codeType: this.app.get("codeType").login,
            expiredAt: {
              $gt: new Date().getTime()
            }
          }
        });
        if (codes.length) {
          const id = loginUser[this.service.id];
          const payload = { [`${this.options.entity}Id`]: id };
          done(null, loginUser, payload);
        } else {
          done(new errors.BadRequest("验证码过期"));
        }
      } else {
        done(new errors.BadRequest("用户不存在"));
      }
    }
    // console.log(user);
    // do your custom stuff. You can call internal Verifier methods
    // and reference this.app and this.options. This method must be implemented.
    // the 'user' variable can be any truthy value
  }
}

module.exports = function() {
  const app = this;
  const config = app.get("authentication");

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());

  app.configure(local({ usernameField: "phone", Verifier: CustomVerifier }));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service("authentication").hooks({
    before: {
      create: [authentication.hooks.authenticate(config.strategies)],
      remove: [authentication.hooks.authenticate("jwt")]
    }
  });
};
