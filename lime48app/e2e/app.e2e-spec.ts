import { Lime48appPage } from './app.po';

describe('lime48app App', () => {
  let page: Lime48appPage;

  beforeEach(() => {
    page = new Lime48appPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
