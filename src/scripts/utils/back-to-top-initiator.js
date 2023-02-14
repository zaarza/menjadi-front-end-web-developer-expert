import { createBackToTopButtonTemplate } from '../templates/template-creator';

const BackToTopInitiator = {
  init({ backToTopContainer }) {
    this._backToTopContainer = backToTopContainer;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 1170) {
        this._showBackToTopButton();
      } else {
        this._hideBackToTopButton();
      }
    });
  },

  _hideBackToTopButton() {
    this._backToTopContainer.innerHTML = '';
  },

  _showBackToTopButton() {
    this._backToTopContainer.innerHTML = createBackToTopButtonTemplate();
  },
};

export default BackToTopInitiator;
