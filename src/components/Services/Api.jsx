import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '36598213-1c05ffc9aa6b3be50b197b0cb';

export const fetchImages = async (searcInputForm, page) => {
  try {
    const response = await axios.get(
      `${URL}?q=${searcInputForm}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
