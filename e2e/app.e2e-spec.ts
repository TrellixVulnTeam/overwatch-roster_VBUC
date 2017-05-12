import { NgTrackerPage } from './app.po';

describe('ng-tracker App', () => {
  let page: NgTrackerPage;

  beforeEach(() => {
    page = new NgTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
