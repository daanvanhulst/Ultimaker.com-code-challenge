const { Injectable } = require('../ioc/injectable');

class Header extends Injectable {
  constructor() {
    super();
    this.loginService = this.$inject('ILoginService');
  }

  async render() {
    const user = await this.loginService.getUser();

    return `
      <div id="header">
        <span>User name: ${user.name}</span>
      </div>
    `;
  }
}

module.exports.Header = Header;
