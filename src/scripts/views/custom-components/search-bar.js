/* eslint-disable class-methods-use-this */

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <form class="search-form">
        <input type="text" class="input-text-primary" id="search" placeholder="Cari restoran..." autocomplete="off" required/>
        <button type="submit" class="button-primary" id="search-submit">Cari</button>
      </form>
    `;
  }

  connectedCallback() {
    const searchInput = document.getElementById('search');
    const searchSubmit = document.getElementById('search-submit');

    searchSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.getSearchResult(searchInput.value);
    });
  }

  getSearchResult(query) {
    window.location.href = `#search/${query}`;
  }
}

customElements.define('search-bar', SearchBar);
export default SearchBar;
