import client from '../feathers';

const methods = ['find', 'get', 'create', 'update', 'patch', 'remove'];

class FeathersService {
  
  static getService(name) {
    return client.service(name);
  }

  constructor(name) {
    this.name = name;
    this.service = client.service(this.name);
    methods.forEach(
      method =>
        this[method] = (path, options, error) =>
          new Promise((resolve, reject) => {
            this.service[method](options).then((err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            });
          }),
    );
  }

  getService() {
    return this.service;
  }
}

export default FeathersService;
