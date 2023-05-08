
//factory pour la création des éléments DOM de la lightbox
function lightBoxFactory(data) {
    const { id, photographerId, title, image,video } = data;
    let picture;
    //en fonction du type de média, image ou vidéo, on définit le chemin adéquat
    if (image){        
        picture = `assets/images/${photographerId}/${image}`;
    }else {        
        picture = `assets/images/${photographerId}/${video}`;
    }
    function getLightBoxCardDOM() {        
        const articlePhoto = document.createElement( 'article' );
        articlePhoto.setAttribute("id", 'idArticle');
        let img ;        
        //en fonction du type de média, image ou vidéo, on attribue les propriétés correspondantes
        if (image){
            img = document.createElement( 'img' );
            img.setAttribute("alt", `Photo  ${title}`)
        }else {
            img = document.createElement( 'video' );
            img.controls = true;
            img.setAttribute("type", 'video/mp4');
            img.setAttribute("alt", `video  ${title}`);
        }
        img.setAttribute("src", picture)
        
        const pTitle = document.createElement( 'p' );
        pTitle.innerHTML = `${title}`;
        articlePhoto.appendChild(img);
        articlePhoto.appendChild(pTitle);
        return (articlePhoto);
    }
    return { id, photographerId, title, image,video, getLightBoxCardDOM }
}