import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import RestaurantCard from '../custom-components/restaurant-card';
import LoadingCircle from '../custom-components/loading-circle';
import BackToTopInitiator from '../../utils/back-to-top-initiator';
// eslint-disable-next-line no-unused-vars
import SearchBar from '../custom-components/search-bar';

const Home = {
  async render() {
    return `
    <div class="page">
        <picture class="hero">
          <source class="hero-image" media="(max-width: 770px)" srcset="./images/hero-image_4--small.jpg" />
          <img class="hero-image" src="./images/hero-image_4--large.jpg" alt="InfoResto hero image" />
        </picture>
      <search-bar></search-bar>
      <h1 class="page-title">Explore Restaurant</h1>
      <div class="restaurant-list"></div>
    </div>
    <div class="back-to-top-container"></div>
    `;
  },

  async afterRender() {
    const restaurantList = document.getElementsByClassName('restaurant-list')[0];
    restaurantList.appendChild(new LoadingCircle());
    const page = document.getElementsByClassName('page')[0];
    const data = await DicodingRestaurantSource.restaurantList();
    restaurantList.innerHTML = '';
    data.restaurants.forEach((restaurant) => {
      const card = new RestaurantCard({
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      });
      restaurantList.appendChild(card);
    });
    page.appendChild(restaurantList);
    const backToTopContainer = document.getElementsByClassName('back-to-top-container')[0];
    BackToTopInitiator.init({ backToTopContainer });
  },
};

export default Home;
