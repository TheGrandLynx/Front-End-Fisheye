
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
}

async function displayMedias(currentMedias) {    
    const mediaSection = document.querySelector(".photoListe");
    currentMedias.forEach((media) => {
        const photoModel = mediaFactory(media);
        const photoCardDOM = photoModel.getImageCardDOM();
        mediaSection.appendChild(photoCardDOM);
        const img = photoCardDOM.querySelectorAll('img,video')[0];
        img.addEventListener("click", function(){
            openLightbox(media);
        })
        img.addEventListener("keyup", function(e){
            if (e.code === 'Enter' && document.getElementById('main').getAttribute('aria-hidden') == 'false') {
                openLightbox(media);
            }
        })
        const pLikes = photoCardDOM.querySelectorAll('p')[1];
        addLikeListeners(pLikes);
    });
}



async function displayLikesPrice(currentPhotographer, currentMedias) {
    const asideLikesPrice = document.querySelector(".asideLikesPrice");
    const likesPriceModel = likesPriceFactory(currentPhotographer);
    const likesPriceDOM = likesPriceModel.getLikesPriceDom();
    asideLikesPrice.appendChild(likesPriceDOM);
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
}

init();