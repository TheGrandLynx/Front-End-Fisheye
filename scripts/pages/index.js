    //récupérer les données des photographes à partir du fichier json
    async function getPhotographers() {
        const promesse = await fetch('/data/photographers.json');
        const wPhotographers = await promesse.json();
        const photographers = wPhotographers['photographers']
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
