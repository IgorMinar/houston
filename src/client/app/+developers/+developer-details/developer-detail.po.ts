export class DeveloperDetailsPage {

  navigateToDeveloper(developerId) {
    return browser.get('/developers/developer-detail/' + developerId);
  }


  getBio() {
    // TODO(i): by.binding throw "angular is not defined" error
    // element(by.binding('developer.bio')).getText();
    return element(by.css('developer-details .row .col-sm-10 p')).getText();
  }


  getEditButton() {
    // TODO(i): could we use 'button:contains("Edit Developer")' here?
    return element(by.css('developer-details button'));
  }
}
