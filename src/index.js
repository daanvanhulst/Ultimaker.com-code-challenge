const { Page } = require('./page');

const { Header } = require('./base-page/header');
const { Content } = require('./base-page/content');
const { Footer } = require('./base-page/footer');

const { LoginService } = require('./services/login.service');
const { ContentService } = require('./services/content.service');
const { DisclaimerService } = require('./services/disclaimer.service');

const app = new Page(
  new Header(new LoginService()),
  new Content(new ContentService()),
  new Footer(new LoginService(), new DisclaimerService()),
);

app.render();
