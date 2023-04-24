//Mettre le code JavaScript lié à la page photographer.html
//Récupère l'ID du photographe recherché dans l'URL
const photographerUrl = window.location.search;
const urlParams = new URLSearchParams(photographerUrl);
const photographerId = urlParams.get("id");

async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        
        console.log('Début')
        const promesse = await fetch('/data/photographers.json');
        const wPhotographers = await promesse.json();
        const photographers = wPhotographers['photographers']
        
        for (let i = 0; i < photographers.length; i++) {
            console.log(photographers[i].name + photographers[i].id);
         }
            
            
         
        console.log('Fin');	
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            photographers: [...photographers]})
}

async function getMedias() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        
        const promesse = await fetch('/data/photographers.json');
        const wMedias = await promesse.json();
        const medias = wMedias['media']
        
    
        return ({
            medias: [...medias]})
}


async function displayData(currentPhotographer) {
    
    const photographersSection = document.querySelector(".photograph-header");
    console.log('test'+currentPhotographer['name']);
    const wPhotographerFactory = photographerFactory(currentPhotographer);
    // pour le header
    const sphotographerFactory = wPhotographerFactory.getUserHeaderCardDOM();
    Object.values(sphotographerFactory).forEach((value) => {
        photographersSection.append(value);
    });
    
};

async function displayMedias(currentMedias) {
    
    const mediaSection = document.querySelector(".photoListe");
    console.log('test'+currentMedias['title']);
    


        currentMedias.forEach((media) => {
            const photoModel = mediaFactory(media);
            const photoCardDOM = photoModel.getImageCardDOM();
            mediaSection.appendChild(photoCardDOM);
        });
};

async function displayLikesPrice(currentPhotographer, currentMedias) {
    const asideLikesPrice = document.querySelector(".asideLikesPrice");
    const likesPriceModel = likesPriceFactory(currentPhotographer, currentMedias);
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
    console.log(currentMedias.length)
    for (let i = 0; i < currentMedias.length; i++) {
        console.log(currentMedias[i].photographerId + currentMedias[i].title + currentMedias[i].likes);
     }
    displayMedias(currentMedias);
    console.log(currentPhotographer, currentMedias);
    displayLikesPrice(currentPhotographer, currentMedias);
};

init();