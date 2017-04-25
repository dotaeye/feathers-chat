// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const verificationCode = sequelizeClient.define(
    'verification-code',
    {
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      codeType: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      expiredAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate(models) { // eslint-disable-line no-unused-vars
          // Define associations here
          // See http://docs.sequelizejs.com/en/latest/docs/associations/
        }
      }
    }
  );

  return verificationCode;
};
