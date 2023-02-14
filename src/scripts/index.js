/* eslint-disable no-unused-vars */
import '../public/styles/main.css';
import '../public/styles/responsive.css';
import '../public/styles/loading-circle.css';
import App from './views/App';
import ServiceWorker from './utils/service-worker';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.hamburger'),
  content: document.querySelector('.main-content'),
  navbarLinks: document.querySelector('.navbar__links'),
});

window.addEventListener('load', () => {
  ServiceWorker();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
