// Initializes the `todo` service on path `/todo`
const createService = require('feathers-sequelize');
const createModel = require('../../models/todo.model');
const hooks = require('./todo.hooks');
const filters = require('./todo.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'todo',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/todo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('todo');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
