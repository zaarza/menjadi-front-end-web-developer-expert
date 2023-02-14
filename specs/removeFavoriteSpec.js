/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Remove restaurant from favorite list', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await TestFactories.cleanRestaurantDatabase();
    await favoriteRestaurantIdb.putFavoriteRestaurant({ restaurantId: 2 });
  });

  it('Should show remove favorite button when the restaurant has been added before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 2 });
    const removeFavoriteButton = document.getElementById('remove-favorite-button');
    expect(removeFavoriteButton).toBeTruthy();
  });

  it('Should not show add to favorite button when the restaurant has  been added before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 2 });
    const removeFavoriteButton = document.getElementById('favorite-button');
    expect(removeFavoriteButton).toBeFalsy();
  });

  it('Should be able to remove restaurant to favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 2 });
    const removeFavoriteButton = document.getElementById('remove-favorite-button');

    removeFavoriteButton.dispatchEvent(new Event('click'));

    const favoritedRestaurant = await favoriteRestaurantIdb.getAllFavoriteRestaurantList();
    expect(favoritedRestaurant).toEqual([]);
  });

  it('Should not error when the restaurant has not been in favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ restaurantId: 2 });
    await favoriteRestaurantIdb.deleteFavoriteRestaurant(2);

    // make sure the presenter still show the remove favorite button
    const removeFavoriteButton = document.getElementById('remove-favorite-button');
    expect(removeFavoriteButton).toBeTruthy();

    removeFavoriteButton.dispatchEvent(new Event('click'));
    const favoritedRestaurant = await favoriteRestaurantIdb.getAllFavoriteRestaurantList();
    expect(favoritedRestaurant).toEqual([]);
  });
});
