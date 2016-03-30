import {DeveloperDetailsPage} from './developer-detail.po.ts';


describe('houston App', function() {
  let page: DeveloperDetailsPage;
  const BASE_URL = 'http://localhost:4200';

  beforeEach(() => { page = new DeveloperDetailsPage(); });


  it('should render developer bio', () => {
    page.navigateToDeveloper('danwahlin');
    expect(page.getBio()).toMatch(/^Dan is the founder of Wahlin Consulting/);
  });


  xit('should have an edit button that takes us to the edit view', () => {
    page.navigateToDeveloper('danwahlin');
    page.getEditButton().click();

    // TODO: for some reason we test too early when the url hasn't changed yet
    expect(browser.getCurrentUrl()).toBe(BASE_URL + '/developers/developer-edit/danwahlin');
  });
});
