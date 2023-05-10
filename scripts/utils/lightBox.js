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

function addLightboxListeners(){
    document.addEventListener('keyup', function (e) {
    if(lightBoxModal.getAttribute('aria-hidden') == 'false'){
        if (e.code === 'ArrowLeft') {
        gotoPrevLightbox();
        }
        if (e.code === 'ArrowRight') {
        gotoNextLightbox();
        }
        if (e.code === 'Escape') {
        closeLightbox();
        }
    }
    });
    const lightboxNext = document.getElementById('lightbox-next')
    lightboxNext.addEventListener("click", function(){
        gotoNextLightbox();
    });
    const lightboxPrev = document.getElementById('lightbox-prev')    
    lightboxPrev.addEventListener("click", function(){        
        gotoPrevLightbox();
    });
}



function gotoNextLightbox(){
    let nextLightboxId = currentMedias.findIndex(media => media.id == currentLightbox.id);
        if(nextLightboxId == currentMedias.length-1){            
            nextLightboxId = 0;
        }else{
            nextLightboxId +=1;
        }
        const articleLightbox = document.getElementById("idArticle");
        articleLightbox.remove();
        const lightBoxMedia = document.querySelector(".media_name_container");
        const lightBoxModel = lightBoxFactory(currentMedias[nextLightboxId]);
        const lightBoxCardDOM = lightBoxModel.getLightBoxCardDOM();
        lightBoxMedia.appendChild(lightBoxCardDOM);
        currentLightbox = currentMedias[nextLightboxId];
}

function gotoPrevLightbox(){
    let prevLightboxId = currentMedias.findIndex(media => media.id == currentLightbox.id);
    if(prevLightboxId == 0){            
        prevLightboxId = currentMedias.length-1;
    }else{
        prevLightboxId -=1;
    }
    const articleLightbox = document.getElementById("idArticle");
    articleLightbox.remove();
    const lightBoxMedia = document.querySelector(".media_name_container");                
    const lightBoxModel = lightBoxFactory(currentMedias[prevLightboxId]);
    const lightBoxCardDOM = lightBoxModel.getLightBoxCardDOM();
    lightBoxMedia.appendChild(lightBoxCardDOM);
    currentLightbox = currentMedias[prevLightboxId];
}
function openLightbox(media){
    currentLightbox = media;
    const lightBoxMedia = document.querySelector(".media_name_container");
    const lightBoxModel = lightBoxFactory(media);
    const lightBoxCardDOM = lightBoxModel.getLightBoxCardDOM();
    lightBoxMedia.appendChild(lightBoxCardDOM);
    displayLightBox();
}

function init(){
    addLightboxListeners();
}

init();