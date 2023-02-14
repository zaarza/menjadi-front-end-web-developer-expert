/* eslint-disable class-methods-use-this */
import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';

class RestaurantCard extends HTMLElement {
  constructor({
    id, name, description, pictureId, city, rating,
  }) {
    super();
    this._id = id;
    this._name = name;
    this._description = description;
    this._pictureId = pictureId;
    this._city = city;
    this._rating = rating;

    this.classList.add('card');
    this.setAttribute('id', this._id);
    this.innerHTML = `
    <img class="card-img lazyload" data-src="${DicodingRestaurantSource.restaurantImage(this._pictureId, 'small')}" alt="${`gambar dari ${this._name}`}" />
    <div class="card__body">
      <p class="card-city" aria-label="${`${this._name} terletak di ${this._city}`}">${this._city}</p>
      <h1 class="card-title">${this._name}</h1>
      <h2 class="card-rating">Rating: ${this._rating}</h2>
      <p class="card-desc">${this._description}</p>
      <div class="card__action">
        <a class="button-primary card-detail-button" href="#detail/${this._id}" aria-label="${`Lihat detail untuk restoran ${this._name}`}"><span>Detail</span></a>
      </div>
      </div>`;
  }
}

customElements.define('restaurant-card', RestaurantCard);
export default RestaurantCard;
