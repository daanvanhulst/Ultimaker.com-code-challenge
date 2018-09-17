class DiscaimerService {
  constructor() {
    this.disclaimer = '© by';
  }

  async getDisclaimer() {
    return new Promise(resolve => resolve(this.disclaimer));
  }
}

module.exports.DisclaimerService = DiscaimerService;
