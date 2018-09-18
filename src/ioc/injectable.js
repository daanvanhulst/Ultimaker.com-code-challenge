const { container } = require('./container');

class Injectable {
  $inject(symbol) {
    return container.get(symbol);
  }
}

module.exports.Injectable = Injectable;
