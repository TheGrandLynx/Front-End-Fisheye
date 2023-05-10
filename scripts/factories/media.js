
//factory pour la création des éléments DOM des cards de la liste des photos du photographe
function mediaFactory(data) {
    const { id, photographerId, title, image,video, likes, date, price } = data;
    let picture;
    //en fonction du type de média, image ou vidéo, on définit le chemin adéquat
    if (image){        
        picture = `assets/images/${photographerId}/${image}`;
    }else {        
        picture = `assets/images/${photographerId}/${video}`;
    }
    function getImageCardDOM() {        
        const articlePhoto = document.createElement( 'article' );
        let img ;
        //en fonction du type de média, image ou vidéo, on attribue les propriétés correspondantes
        if (image){
            img = document.createElement( 'img' );
            img.setAttribute("alt", `Photo  ${title}`);           
        }else {
            img = document.createElement( 'video' );
            img.setAttribute("alt", `Vidéo  ${title}`);
        }
        img.setAttribute("src", picture);
        img.setAttribute("id", `${id}`);
        img.setAttribute("aria-label", `${title}, Vue en gros plan`);
        img.setAttribute("tabindex", `0`);
        const divPhotoDescription = document.createElement( 'div' );
        const pTitle = document.createElement( 'p' );
        pTitle.innerHTML = `${title}`;
        const pLikes = document.createElement( 'p' );
        pLikes.setAttribute("tabindex", `0`);
        pLikes.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;        
        divPhotoDescription.appendChild(pTitle);
        divPhotoDescription.appendChild(pLikes);
        articlePhoto.appendChild(img);
        articlePhoto.appendChild(divPhotoDescription);
        return (articlePhoto);
    }

    return { id, photographerId, title, image, likes, date, price, getImageCardDOM }
}
