const container = {
  registry: {},
  register: (k, v) => {
    container.registry[k] = v;
  },
  get: (k) => {
    const registrant = container.registry[k];

    return registrant;
  },
};

module.exports.container = container;
