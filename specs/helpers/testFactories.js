/* eslint-disable import/prefer-default-export */
import FavoriteButtonPresenter from '../../src/scripts/utils/FavoriteButtonPresenter';
import favoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.getElementById('favorite-button-container'),
    restaurant,
  });
};

const cleanRestaurantDatabase = async () => {
  (await favoriteRestaurantIdb.getAllFavoriteRestaurantList()).forEach((restaurant) => {
    favoriteRestaurantIdb.deleteFavoriteRestaurant(restaurant.restaurantId);
  });
};

export { createFavoriteButtonPresenterWithRestaurant, cleanRestaurantDatabase };
