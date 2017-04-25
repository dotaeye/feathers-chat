const errors = require("feathers-errors");

module.exports = ({ codeType }) => async hook => {
  const { phone, code } = hook.data;
  const codes = await hook.app.service("verification-code").find({
    query: {
      phone,
      code,
      codeType,
      expiredAt: {
        $gt: new Date().getTime()
      }
    }
  });
  if (codes.length === 0) {
    throw new errors.BadRequest("验证码已失效或输入有误");
  } else {
    return hook;
  }
};
