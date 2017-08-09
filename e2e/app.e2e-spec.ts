import { GTabsPage } from './app.po';

describe('g-tabs App', () => {
  let page: GTabsPage;

  beforeEach(() => {
    page = new GTabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
