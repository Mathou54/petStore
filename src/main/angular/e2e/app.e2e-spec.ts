import { PetstorePage } from './app.po';

describe('petstore App', function() {
  let page: PetstorePage;

  beforeEach(() => {
    page = new PetstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
