const DrawerInitiator = {
  init({ button, content, navbarLinks }) {
    const links = Array.from(navbarLinks.children);
    button.addEventListener('click', (event) => {
      this._toggleNavbar(event, navbarLinks);
    });

    content.addEventListener('click', (event) => {
      this._hideNavbar(event, navbarLinks);
    });

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        links.forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');
        this._hideNavbar(event, navbarLinks);
      });
    });
  },

  _toggleNavbar(event, navbarLinks) {
    event.stopPropagation();
    navbarLinks.classList.toggle('active');
  },

  _hideNavbar(event, navbarLinks) {
    event.stopPropagation();
    navbarLinks.classList.remove('active');
  },
};

export default DrawerInitiator;
