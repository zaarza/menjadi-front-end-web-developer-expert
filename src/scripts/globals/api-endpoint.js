import config from './config';

const apiEndpoint = {
  SEARCH: (query) => `${config.BASE_URL}/search?q=${query}`,
  LIST: `${config.BASE_URL}/list`,
  DETAIL: (id) => `${config.BASE_URL}/detail/${id}`,
  REVIEW: `${config.BASE_URL}/review`,
  IMAGE: (pictureId, imageSize) => `${config.BASE_URL}/images/${imageSize}/${pictureId}`,
};

export default apiEndpoint;
