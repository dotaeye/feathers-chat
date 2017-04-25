const bcrypt = require("bcryptjs");

async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

function getRandCode(length) {
  let text = "";
  let possible = "0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const isAction = (...args) => hook => args.includes(hook.data.action);

module.exports = {
  getRandCode,
  isAction,
  comparePassword
};
