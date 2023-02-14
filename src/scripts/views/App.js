/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import routes from '../routes/routes';
import urlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, content, navbarLinks }) {
    this._button = button;
    this._content = content;
    this._navbarLinks = navbarLinks;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      content: this._content,
      navbarLinks: this._navbarLinks,
    });
  }

  async renderPage() {
    const currentUrl = urlParser.parseActiveUrlWithCombiner();
    const page = routes[currentUrl];
    this._content.innerHTML = await page.render();
    await page.afterRender(this._content);
  }
}

export default App;
