// Initializes the `verification-code` service on path `/verification-code`
const createService = require('feathers-sequelize');
const createModel = require('../../models/verification-code.model');
const hooks = require('./verification-code.hooks');
const filters = require('./verification-code.filters');

module.exports = function() {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'verification-code',
    Model,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/verification-code', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('verification-code');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
