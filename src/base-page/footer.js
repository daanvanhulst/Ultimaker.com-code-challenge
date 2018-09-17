class Footer {
  constructor(loginService, disclaimerService) {
    this.loginService = loginService;
    this.disclaimerService = disclaimerService;
  }

  async render() {
    const user = await this.loginService.getUser();
    const disclaimer = await this.disclaimerService.getDisclaimer();

    return `
      <div id="footer">
        <span class="disclaimer">${disclaimer} by user ${user.name}</span>
      </div>
    `;
  }
}

module.exports.Footer = Footer;
