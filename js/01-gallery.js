import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);

gallery.addEventListener("click", onGalleryClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
    
        return `  
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');
}  

function onGalleryClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    
    const urlOriginalSizePicture = e.target.dataset.source;
        
    const instance = basicLightbox.create(
    ` <div class="modal"> <img src="${urlOriginalSizePicture}" width="800" height="600">  </div> `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapeButton);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscapeButton);
      },
    }
  );
    instance.show();
    
  function onEscapeButton(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}

