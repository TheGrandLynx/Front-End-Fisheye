const lightBoxModal = document.getElementById("lightbox_modal");
const imgCloseLightbox = document.getElementById('lightbox-close');
function closeLightbox() {
    const articleLightbox = document.getElementById("idArticle");
    articleLightbox.remove();
    main.setAttribute('aria-hidden', 'false');
    lightBoxModal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    imgCloseModal.focus();
    lightBoxModal.style.display = "none"; 
}

function displayLightBox() {
    main.setAttribute('aria-hidden', 'true');
    lightBoxModal.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
	lightBoxModal.style.display = "block";
    imgCloseLightbox.focus();
}