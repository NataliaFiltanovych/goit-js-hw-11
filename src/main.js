import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.show({
      message: 'Fill please field',
      messageColor: 'white',
      color: 'red',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      const images = response.hits;
      if (images.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          color: 'red',
          position: 'topRight',
        });

        return;
      }

      createGallery(images);
    })
    .catch(error => {
      iziToast.show({
        message: 'Sorry, error. Please try again later!',
        messageColor: 'white',
        color: 'red',
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
});
