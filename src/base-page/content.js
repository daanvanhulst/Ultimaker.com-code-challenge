class Content {
  constructor(contentService) {
    this.contentService = contentService;
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
