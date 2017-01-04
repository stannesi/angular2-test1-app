import { Angular2Test1AppPage } from './app.po';

describe('angular2-test1-app App', function() {
  let page: Angular2Test1AppPage;

  beforeEach(() => {
    page = new Angular2Test1AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
