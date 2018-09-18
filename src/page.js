const { Injectable } = require('./ioc/injectable');

class Page extends Injectable {
  constructor() {
    super();
    this.header = this.$inject('IHeader');
    this.content = this.$inject('IContent');
    this.footer = this.$inject('IFooter');

    console.log(this.header);
  }

  async render() {
    console.log(`
      ${await this.header.render()}
      ${await this.content.render()}
      ${await this.footer.render()}
    `);
  }
}

module.exports.Page = Page;
