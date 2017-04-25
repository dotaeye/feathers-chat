const errors = require("feathers-errors");
const get = require("lodash.get");
const { comparePassword } = require("../utils");

module.exports = async hook => {
  const { oldPassword, password, confirmPassword } = hook.data;
  const currentPassword = get(hook.params.user, "password");
  const correct = await comparePassword(oldPassword, currentPassword);
  if (!correct) {
    throw new errors.BadRequest("旧密码错误");
  } else if (password !== confirmPassword) {
    throw new errors.BadRequest("两次密码输入不一致");
  } else {
    hook.data.oldPassword = null;
    hook.data.confirmPassword = null;
    return hook;
  }
};
