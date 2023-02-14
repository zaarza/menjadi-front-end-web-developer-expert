/* eslint-disable consistent-return */
import { openDB } from 'idb';
import config from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = config;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'restaurantId' });
  },
});

const favoriteRestaurantIdb = {
  async getAllFavoriteRestaurantList() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async getFavoriteRestaurant(restaurantId) {
    if (!restaurantId) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, restaurantId);
  },

  async putFavoriteRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('restaurantId')) {
      console.log('triggered');
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteFavoriteRestaurant(restaurantId) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, restaurantId);
  },
};

export default favoriteRestaurantIdb;
