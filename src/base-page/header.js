class Header {
  constructor(loginService) {
    this.loginService = loginService;
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
