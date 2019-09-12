import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (pageNumber = 1, inputSearch = 'cat') => {
  const key = `&key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
  const settings = '?image_type=photo&orientation=horizontal';
  const perPage = '&per_page=12';
  const page = `&page=${pageNumber}`;
  const search = `&q=${inputSearch}`;

  return axios.get(settings + perPage + key + page + search);
};

// export const DEFAULT_QUERY = 'design';

/*
process.env.REACT_APP_PIXABAY_API_KEY
to use what we`ve created in env file
 */
