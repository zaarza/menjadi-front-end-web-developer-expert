/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('favorite restaurant');

Before(({ I }) => {
  I.amOnPage('/#favorite');
  I.wait(2);
  I.seeElement('.restaurant-list');
  I.see('Kamu belum menambahkan restoran ke dalam favorit!', '#empty-favorite');
});

Scenario('adding restaurant to favorite list', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantDetailButton = locate('.card-detail-button').first();
  I.click(firstRestaurantDetailButton);

  I.wait(2);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#favorite');
  const favoritedRestaurant = locate('.card-title').first();
  const favoritedRestaurantTitle = await I.grabTextFrom(favoritedRestaurant);
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('adding restaurant to favorite then remove it', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantDetailButton = locate('.card-detail-button').first();
  I.click(firstRestaurantDetailButton);

  I.wait(2);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#favorite');
  const favoritedRestaurant = locate('.card-title').first();
  const favoritedRestaurantTitle = await I.grabTextFrom(favoritedRestaurant);
  const favoritedRestaurantDetailButton = locate('.card-detail-button').first();
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
  I.click(favoritedRestaurantDetailButton);
  I.wait(2);
  I.click('#remove-favorite-button');

  I.amOnPage('/#favorite');
  I.dontSee(favoritedRestaurant);
});
