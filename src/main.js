import { getImagesByQuery } from './js/pixabay-api';
const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    alert('Fill please field');
    return;
  }
  getImagesByQuery(query)
    .then(response => {
      const images = response.data.hits;
      if (images.length === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      console.log(images);
    })
    .catch(error => {
      alert('Sorry, error. Please try again later!');
      console.log(error);
    });
});
