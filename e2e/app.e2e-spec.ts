import { PartyUnlimitedPage } from './app.po';

describe('party-unlimited App', function() {
  let page: PartyUnlimitedPage;

  beforeEach(() => {
    page = new PartyUnlimitedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
