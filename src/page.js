/* eslint-env browser */

class Page {
  constructor(header, content, footer) {
    this.header = header;
    this.content = content;
    this.footer = footer;
  }

  async render() {
    console.log('rendering page');
    console.log(`
      ${await this.header.render()}
      ${await this.content.render()}
      ${await this.footer.render()}
    `);
  }
}

module.exports.Page = Page;
