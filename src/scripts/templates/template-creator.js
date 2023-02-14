/* eslint-disable max-len */
import DicodingRestaurantSource from '../data/dicoding-restaurant-source';

const createDetailRestaurantTemplate = (restaurant) => `
    <h1 class="page-title">${restaurant.name}</h1>
    <div class="restaurant-detail-header">
      <img src="${DicodingRestaurantSource.restaurantImage(restaurant.pictureId, 'large')}" alt="Gambar dari restoran ${restaurant.name}" class="restaurant-detail__img" />
        <div class="restaurant-detail-info">
          <h2 class="restaurant-detail-info-title">Informasi mengenai restoran ini:</h2>
          <p><b>Kota:</b> ${restaurant.city}</p>
          <p><b>Alamat:</b> ${restaurant.address}</p>
          <p><b>Rating:</b> ${restaurant.rating}</p>
          <div class="restaurant-categories">
            <p><b>Kategori: </b></p>
            <ul class="restaurant-categories-list">
              ${restaurant.categories.map((category) => `<li class="restaurant-category">${category.name}</li>`).join('')}
            </ul>
          </div>
        </div>
    </div>
    
    <p class="restaurant-detail__description">${restaurant.description}</p>

    <div class="restaurant-menus">
      <h2>Daftar Menu</h2>
      <div class="restaurant-menu__wrapper">
        <div class="restaurant-menu">
          <h3>Minuman</h3>
          <ul>${restaurant.menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}</ul>
        </div>
        <div class="restaurant-menu">
          <h3>Makanan</h3>
         <ul>${restaurant.menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}</ul>
        </div>
      </div>
    </div>

    <button class="button-primary" onclick="history.back()">Kembali</button>
    <h2 class="title-center">Ulasan Pembeli (${restaurant.customerReviews.length})</h2>
    ${restaurant.customerReviews.map((review) => `<div class="review"><h3>${review.name}</h3><p>${review.review}</p><p class="review-date">${review.date}</p></div>`).join(' ')}

    <form class="new-review-form">
      <h2>Tambahkan ulasan baru</h2>
      <span class="input-span">
        <label for="input-name">Nama*</label>
        <input type="text" id="input-name" placeholder="Masukkan nama anda..." required/>
      </span>
      <span class="input-span">
        <label for="input-review">Ulasan*</label>
        <textarea id="input-review" placeholder="Menu lengkap, tempat bersih" required></textarea>
      </span>
        <button id="submit-review" class="button-primary" type="submit">Kirim</button>
    </form> 
  `;

const createFavoriteRestaurantButtonTemplate = () => `
    <button aria-label="add this restaurant to favorite list" id="favorite-button" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createRemoveFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="remove this restaurant from favorite list" id="remove-favorite-button" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createBackToTopButtonTemplate = () => `
  <a href="#" class="back-to-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
  </a>  
`;

export {
  createDetailRestaurantTemplate, createFavoriteRestaurantButtonTemplate, createRemoveFavoriteRestaurantButtonTemplate, createBackToTopButtonTemplate,
};
