function closeLightbox() {
    const lightBoxModal = document.getElementById("lightbox_modal");
    const articleLightbox = document.getElementById("idArticle");
    articleLightbox.remove();
    console.log('remove');
    document.removeEventListener('keyup', function(keyboardevent){});
    lightBoxModal.style.display = "none"; 

}

function displayLightBox() {
    const lightBoxModal = document.getElementById("lightbox_modal");
	lightBoxModal.style.display = "block";
}