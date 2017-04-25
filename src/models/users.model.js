// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define(
    'users',
    {
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      githubId: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      }
    },
    {
      classMethods: {
        associate(models) {
          users.hasMany(models.todo, { foreignKey: 'owner_id' });
          // eslint-disable-line no-unused-vars
          // Define associations here
          // See http://docs.sequelizejs.com/en/latest/docs/associations/
        }
      }
    }
  );

  return users;
};
