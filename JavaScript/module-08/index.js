import galleryItems from './gallery-items.js';

const galleryItem = {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
  description: 'Hokkaido Flower',
}

function createItem(galleryItem) {
  const li = document.createElement('li');
  li.className = 'gallery__item';

  const a = document.createElement('a');
  a.className = 'gallery__link';
  a.setAttribute('href', galleryItem.original);

  const img = document.createElement('img');
  img.className = 'gallery__image';
  img.setAttribute('src', galleryItem.preview);
  img.setAttribute('data-source', galleryItem.original);
  img.setAttribute('alt', galleryItem.description);

  const span = document.createElement('span');
  span.className = 'gallery__icon';

  const i = document.createElement('i');
  i.className = 'material-icons';
  i.textContent = 'zoom_out_map';

  span.append(i);
  a.append(img, span);
  li.append(a);

  return li;
}


const ul = document.querySelector('.gallery');

function renderPictures(galleryItems) {

  galleryItems.forEach(el => {
    ul.append(createItem(el));
  });
}

renderPictures(galleryItems);

// ========= MODAL WINDOW - LIGHTBOX =======


const lightbox = document.querySelector('.lightbox');

ul.addEventListener('click', handleClick);


function handleClick(event) {
  event.preventDefault();
  lightbox.classList.add('is-open');
  const lightboxImage = document.querySelector('.lightbox__image');

  function showLightboxImage() {
    lightboxImage.src = event.target.getAttribute(['data-source']);
    lightboxImage.alt = event.target.getAttribute(['alt']);
  }
  showLightboxImage();
}

// ========= CLOSE LIGHTBOX =======


const closeButton = document.querySelector('.lightbox__button');
closeButton.addEventListener('click', closeLightbox);

const closeOnOverlay = document.querySelector('.lightbox__content');
closeOnOverlay.addEventListener('click', closeLightbox);

function closeLightbox() {
  if (closeButton || closeOnOverlay) {
    lightbox.classList.remove('is-open');
    lightboxImage.src = event.target.removeAttribute(['data-source']);
    lightboxImage.alt = event.target.removeAttribute(['alt']);
  }
}

window.addEventListener('keydown',function(event) {
  if (event.keyCode === 27) {
    lightbox.classList.remove('is-open');
    lightboxImage.src = event.target.removeAttribute(['data-source']);
    lightboxImage.alt = event.target.removeAttribute(['alt']);
  }
});
