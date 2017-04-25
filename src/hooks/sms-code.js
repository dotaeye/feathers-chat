"use strict";

const { getRandCode } = require("../utils");
const moment = require("moment");
/*
* 获取验证码接口
*/
module.exports = async hook => {
  // 查看验证码在指定时间内是否已经存在，如果存在返回当前相同的验证码
  const codes = await hook.app.service("verification-code").find({
    query: {
      phone: hook.data.phone,
      codeType: hook.data.codeType,
      expiredAt: {
        $gt: new Date().getTime()
      }
    }
  });
  if (codes.length) {
    hook.result = codes[0];
  } else {
    // 如果验证码不存在
    // 调用Sms接口短信模板发送短信
    // todo.....
    hook.data.expiredAt = moment()
      .add(hook.app.get("codeExpired"), "m")
      .toDate();
    hook.data.code = getRandCode(6);
  }
  return hook;
};
