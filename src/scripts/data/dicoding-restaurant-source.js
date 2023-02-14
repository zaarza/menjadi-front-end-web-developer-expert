import apiEndpoint from '../globals/api-endpoint';

class DicodingRestaurantSource {
  static async restaurantList() {
    const response = await fetch(apiEndpoint.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantDetail(id) {
    const response = await fetch(apiEndpoint.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantSearch(query) {
    const response = await fetch(apiEndpoint.SEARCH(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static restaurantImage(pictureId, imageSize) {
    return apiEndpoint.IMAGE(pictureId, imageSize);
  }

  static async newReview({ id, name, review }) {
    const data = {
      id,
      name,
      review,
    };

    const response = await fetch(apiEndpoint.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DicodingRestaurantSource;
