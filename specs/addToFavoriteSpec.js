/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Adding restaurant to favorite list', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await TestFactories.cleanRestaurantDatabase();
  });

  it('Should show favorite button when the restaurant has not been added before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 1 });
    const favoriteButton = document.getElementById('favorite-button');
    expect(favoriteButton).toBeTruthy();
  });

  it('Should not show remove favorite button when the restaurant has not been adedd before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 1 });
    const removeFavoriteButton = document.getElementById('remove-favorite-button');
    expect(removeFavoriteButton).toBeFalsy();
  });

  it('Should be able to add restaurant to favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 1 });
    const favoriteButton = document.getElementById('favorite-button');

    favoriteButton.dispatchEvent(new Event('click'));

    const favoritedRestaurant = await favoriteRestaurantIdb.getFavoriteRestaurant(1);
    expect(favoritedRestaurant).toEqual({ restaurantId: 1 });
  });

  it('Should not added again when the restaurant already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 1 });
    const favoriteButton = document.getElementById('favorite-button');
    await favoriteRestaurantIdb.putFavoriteRestaurant({ restaurantId: 1 });

    favoriteButton.dispatchEvent(new Event('click'));

    const favoritedRestaurant = await favoriteRestaurantIdb.getAllFavoriteRestaurantList();
    expect(favoritedRestaurant).toEqual([{ restaurantId: 1 }]);
  });

  it('Should not add the restaurant when the restaurant has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});
    const favoriteButton = document.getElementById('favorite-button');

    favoriteButton.dispatchEvent(new Event('click'));

    const favoritedRestaurant = await favoriteRestaurantIdb.getAllFavoriteRestaurantList();
    expect(favoritedRestaurant).toEqual([]);
  });
});
