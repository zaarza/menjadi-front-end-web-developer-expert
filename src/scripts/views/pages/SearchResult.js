import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import LoadingCircle from '../custom-components/loading-circle';
import RestaurantCard from '../custom-components/restaurant-card';
import urlParser from '../../routes/url-parser';

const SearchResult = {
  async render() {
    return `
    <div class="search-results">
      <search-bar></search-bar>
      <h1 class="main__title">Hasil Pencarian</h1>
      <div class="restaurant-list"></div>
      <button class="button-primary" onclick="history.back()">Kembali</button>
    </div>
    `;
  },

  async afterRender() {
    const restaurantList = document.getElementsByClassName('restaurant-list')[0];
    restaurantList.appendChild(new LoadingCircle());
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const result = await DicodingRestaurantSource.restaurantSearch(url.id);
    if (result.founded) {
      restaurantList.innerHTML = '';
      result.restaurants.map((restaurant) => {
        const card = new RestaurantCard({ ...restaurant });
        return restaurantList.appendChild(card);
      });
    } else {
      restaurantList.innerHTML = '<p>Hasil pencarian tidak ditemukan</p>';
    }
  },
};

export default SearchResult;
