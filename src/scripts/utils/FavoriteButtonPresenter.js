import favoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createFavoriteRestaurantButtonTemplate, createRemoveFavoriteRestaurantButtonTemplate } from '../templates/template-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { restaurantId } = this._restaurant;
    this._renderFavoriteRestaurantButton();
    if (await this._isLiked(restaurantId)) {
      this._renderRemoveFavoriteRestaurantButton();
    }
  },

  async _isLiked(restaurantId) {
    const status = await favoriteRestaurantIdb.getFavoriteRestaurant(restaurantId);
    return !!status;
  },

  _renderFavoriteRestaurantButton() {
    const { restaurantId } = this._restaurant;
    this._favoriteButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

    const addToFavoriteButton = document.getElementById('favorite-button');

    addToFavoriteButton.addEventListener('click', async () => {
      // eslint-disable-next-line max-len
      if (!restaurantId) {
        return;
      }
      await favoriteRestaurantIdb.putFavoriteRestaurant({ restaurantId });
      this._renderButton();
    });
  },

  _renderRemoveFavoriteRestaurantButton() {
    const { restaurantId } = this._restaurant;
    this._favoriteButtonContainer.innerHTML = createRemoveFavoriteRestaurantButtonTemplate();
    const removeFavoriteButton = document.getElementById('remove-favorite-button');

    removeFavoriteButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.deleteFavoriteRestaurant(restaurantId);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
