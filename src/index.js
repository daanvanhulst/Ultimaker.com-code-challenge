const { Page } = require('./page');
const { container } = require('./ioc/container');

const { LoginService } = require('./services/login.service');
const { ContentService } = require('./services/content.service');
const { DisclaimerService } = require('./services/disclaimer.service');

const { Header } = require('./base-page/header');
const { Content } = require('./base-page/content');
const { Footer } = require('./base-page/footer');

container.register('ILoginService', new LoginService());
container.register('IContentService', new ContentService());
container.register('IDisclaimerService', new DisclaimerService());

container.register('IHeader', new Header());
container.register('IContent', new Content());
container.register('IFooter', new Footer());

const app = new Page();

app.render();
