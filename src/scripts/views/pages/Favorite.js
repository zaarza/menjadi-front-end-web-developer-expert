import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import RestaurantCard from '../custom-components/restaurant-card';

const Favorite = {
  async render() {
    return `
        <div class="page">
          <h1 class="page-title favorite-page-title">Restoran Favorit Anda</h1>
          <div class="restaurant-list">
          </div>
        </div>
    `;
  },

  async afterRender() {
    const favoriteListElement = document.getElementsByClassName('restaurant-list')[0];
    const favoriteRestaurantList = await favoriteRestaurantIdb.getAllFavoriteRestaurantList();

    if (favoriteRestaurantList.length === 0) {
      favoriteListElement.innerHTML = '<p id="empty-favorite">Kamu belum menambahkan restoran ke dalam favorit!</p>';
      return;
    }

    favoriteRestaurantList.forEach(async (restaurantDb) => {
      const result = await DicodingRestaurantSource.restaurantDetail(restaurantDb.restaurantId);
      const card = new RestaurantCard({
        id: result.restaurant.id,
        name: result.restaurant.name,
        description: result.restaurant.description,
        pictureId: result.restaurant.pictureId,
        city: result.restaurant.city,
        rating: result.restaurant.rating,
      });
      favoriteListElement.appendChild(card);
    });
  },
};

export default Favorite;
