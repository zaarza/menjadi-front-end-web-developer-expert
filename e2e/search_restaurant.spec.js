/* eslint-disable no-undef */
const assert = require('assert');

Feature('Restaurant seach');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Search a restaurant', async ({ I }) => {
  I.wait(2);
  const firstRestaurantInHomePage = locate('.card-title').first();

  I.seeElement(firstRestaurantInHomePage);
  const firstRestaurantTitleInHomePage = await I.grabTextFrom(firstRestaurantInHomePage);

  I.seeElement('#search');
  I.click('#search');
  I.type(firstRestaurantTitleInHomePage);

  I.seeElement('#search-submit');
  I.click('#search-submit');
  I.wait(2);

  const firstFoundedRestaurant = locate('.card-title').first();

  I.seeElement(firstFoundedRestaurant);
  const firstFoundedRestaurantTitle = await I.grabTextFrom(firstFoundedRestaurant);

  assert.strictEqual(firstRestaurantTitleInHomePage, firstFoundedRestaurantTitle);
});
