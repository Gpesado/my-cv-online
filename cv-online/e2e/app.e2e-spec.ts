import { CvOnlinePage } from './app.po';

describe('cv-online App', function() {
  let page: CvOnlinePage;

  beforeEach(() => {
    page = new CvOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
