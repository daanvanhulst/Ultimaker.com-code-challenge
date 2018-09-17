const { Container } = require('../ioc/ioc-container');

const { IContentService } = require('./interfaces/icontent.service');
const { IDisclaimerService } = require('./interfaces/ilogin.service');
const { ILoginService } = require('./interfaces/idisclaimer.service');

const { ContentService } = require('./content.service');
const { DisclaimerService } = require('./disclaimer.service');
const { LoginService } = require('./login.service');

const container = new Container();

container.register({ interface: IContentService, class: ContentService });
container.register({ interface: IDisclaimerService, class: DisclaimerService });
container.register({ interface: ILoginService, class: LoginService });
