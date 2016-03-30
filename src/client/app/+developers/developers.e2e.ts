import {DevelopersPage} from './developers.po.ts';


describe('houston App', function() {
  let page: DevelopersPage;

  beforeEach(() => { page = new DevelopersPage(); });


  it('should activate the developer listing route by default', () => {
    page.navigateTo();
    expect(element(by.css('developers-listing')).getInnerHtml()).toBeDefined();
  });
});
