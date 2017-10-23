import { ReduxDemoPage } from './app.po';

describe('redux-demo App', () => {
  let page: ReduxDemoPage;

  beforeEach(() => {
    page = new ReduxDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
