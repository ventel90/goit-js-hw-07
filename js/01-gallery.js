import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryImg = document.querySelector('.gallery');

const imagesMarkup = galleryItems
.map(({preview,original,description}) => 
`<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}"/>
</a></div>`).join("");

galleryImg.insertAdjacentHTML('afterbegin', imagesMarkup);
galleryImg.addEventListener('click', onImagesClick);

function onImagesClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
    return;
 }

 galleryImg.addEventListener('click', onImagesClick);

const modalWindow = basicLightbox.create(`<div class = "modal">
 <img src = "${event.target.dataset.source}" width = "800" height = "600">
</div>`, {
    onShow: (modalWindow) => {
        window.addEventListener('keydown', onKeyboardClick);
        console.log('onShow', modalWindow);
    },
    onClose: (modalWindow) => {
        window.removeEventListener('keydown', onKeyboardClick);
        console.log('onClose', modalWindow);
    }
});

modalWindow.show()
function onKeyboardClick (event) {
if(event.code === 'Escape') {
    modalWindow.close();
  };
 };
};
console.log(galleryItems);
