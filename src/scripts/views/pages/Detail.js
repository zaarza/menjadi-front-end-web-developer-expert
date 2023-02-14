import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import urlParser from '../../routes/url-parser';
import LoadingCircle from '../custom-components/loading-circle';
import FavoriteButtonPresenter from '../../utils/FavoriteButtonPresenter';
import { createDetailRestaurantTemplate } from '../../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="inner"></div>
      <div id="favorite-button-container"></div>
    `;
  },

  async afterRender(content) {
    const inner = document.getElementsByClassName('inner')[0];
    inner.appendChild(new LoadingCircle());
    const currentUrl = urlParser.parseActiveUrlWithoutCombiner();
    const restaurantId = currentUrl.id;
    const restaurant = await DicodingRestaurantSource.restaurantDetail(restaurantId);
    inner.innerHTML = createDetailRestaurantTemplate(restaurant.restaurant);

    content.appendChild(inner);

    const newReviewForm = document.getElementsByClassName('new-review-form')[0];
    newReviewForm.addEventListener('submit', () => {
      DicodingRestaurantSource.newReview({
        id: restaurantId,
        name: document.getElementById('input-name').value,
        review: document.getElementById('input-review').value,
      });
      this.afterRender();
    });

    const favoriteButtonContainer = document.getElementById('favorite-button-container');
    FavoriteButtonPresenter.init({
      favoriteButtonContainer,
      restaurant: {
        restaurantId,
      },
    });
  },
};

export default Detail;
