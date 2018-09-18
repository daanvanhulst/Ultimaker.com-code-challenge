const { Injectable } = require('../ioc/injectable');

class Footer extends Injectable {
  constructor() {
    super();
    this.loginService = this.$inject('ILoginService');
    this.disclaimerService = this.$inject('IDisclaimerService');
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
