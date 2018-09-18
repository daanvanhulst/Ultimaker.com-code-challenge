const { Injectable } = require('../ioc/injectable');

class Content extends Injectable {
  constructor() {
    super();
    this.contentService = this.$inject('IContentService');
  }

  async render() {
    const content = await this.contentService.getContent();

    return `
      <div id="content">
        ${content}
      </div>
    `;
  }
}

module.exports.Content = Content;
