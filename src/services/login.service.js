class LoginService {
  constructor() {
    this.user = {
      name: 'Henk',
    };
  }

  async getUser() {
    return new Promise(resolve => resolve(this.user));
  }
}

module.exports.LoginService = LoginService;
