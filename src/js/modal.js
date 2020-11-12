import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onGalleryElClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const changeModalImage = `<img src=${event.target.dataset.source} alt="icon" />`;
  const instance = basicLightbox.create(changeModalImage);

  instance.show();
}
export { onGalleryElClick };
