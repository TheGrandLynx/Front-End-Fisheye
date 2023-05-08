//Mettre le code JavaScript lié à la page photographer.html
//Récupère l'ID du photographe recherché dans l'URL
const photographerUrl = window.location.search;
const urlParams = new URLSearchParams(photographerUrl);
const photographerId = urlParams.get("id");
let currentMedias;
let currentLightbox;
var currentLikes;

async function getPhotographers() {
        const promesse = await fetch('/data/photographers.json');
        const wPhotographers = await promesse.json();
        const photographers = wPhotographers['photographers'];
        return ({photographers: [...photographers]})
}

async function getMedias() {
        const promesse = await fetch('/data/photographers.json');
        const wMedias = await promesse.json();
        const medias = wMedias['media'];
        return ({medias: [...medias]})
}


async function displayData(currentPhotographer) {    
    const photographersSection = document.querySelector(".photograph-header");
    const wPhotographerFactory = photographerFactory(currentPhotographer);
    // pour le header
    const sphotographerFactory = wPhotographerFactory.getUserHeaderCardDOM();
    Object.values(sphotographerFactory).forEach((value) => {
        photographersSection.append(value);
    });    
};

async function displayMedias(currentMedias) {    
    const mediaSection = document.querySelector(".photoListe");
    currentMedias.forEach((media) => {
        const photoModel = mediaFactory(media);
        const photoCardDOM = photoModel.getImageCardDOM();
        mediaSection.appendChild(photoCardDOM);
        const img = document.getElementById(media['id']);
        img.addEventListener("click", function(e){
            openLightbox(media);
        })
        img.addEventListener("keyup", function(e){
            if (e.code === 'Enter' && document.getElementById('main').getAttribute('aria-hidden') == 'false') {
                openLightbox(media);
            }
        })
    });
};

function openLightbox(media){
    currentLightbox = media;
    const lightBoxMedia = document.querySelector(".media_name_container");
    const lightBoxModel = lightBoxFactory(media);
    const lightBoxCardDOM = lightBoxModel.getLightBoxCardDOM();
    lightBoxMedia.appendChild(lightBoxCardDOM);
    displayLightBox();
    addLightboxListeners();
}

async function displayLikesPrice(currentPhotographer, currentMedias) {
    const asideLikesPrice = document.querySelector(".asideLikesPrice");
    const likesPriceModel = likesPriceFactory(currentPhotographer);
    const likesPriceDOM = likesPriceModel.getLikesPriceDom();
    asideLikesPrice.appendChild(likesPriceDOM);
}

function addlisteners(){
    const lightboxNext = document.getElementById('lightbox-next')
    lightboxNext.addEventListener("click", function(e){
        gotoNextLightbox();
    });
    const lightboxPrev = document.getElementById('lightbox-prev')    
    lightboxPrev.addEventListener("click", function(e){        
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
}

function addSortListeners(){
    const selectSort = document.querySelector(".sortSelect");
    selectSort.addEventListener("change", function () {
        removeArticlePhoto();
        const strSelectedSort =  selectSort.options[selectSort.selectedIndex].text;
        currentMedias = sort(currentMedias, strSelectedSort);
        displayMedias(currentMedias);
    });
}

function removeArticlePhoto(){    
    const mediaSection = document.querySelector(".photoListe");
    mediaSection.replaceChildren();
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    currentPhotographer = photographers.find(id => id.id == photographerId);
    displayData(currentPhotographer);
    const { medias } = await getMedias();
    currentMedias = medias.filter(media => media.photographerId == photographerId);
    displayMedias(currentMedias);
    currentLikes = getTotalLikes(currentMedias);
    displayLikesPrice(currentPhotographer, currentMedias);
    addlisteners();
    addSortListeners();
};

init();