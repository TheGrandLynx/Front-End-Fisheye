function lightBoxFactory(data) {
    const { id, photographerId, title, image,video } = data;
    let picture;
    if (image){
        
    picture = `assets/images/${photographerId}/${image}`;
    }else {
        
    picture = `assets/images/${photographerId}/${video}`;
    }
    function getLightBoxCardDOM() {
        
        const articlePhoto = document.createElement( 'article' );
        articlePhoto.setAttribute("id", 'idArticle')
        let img ;
        
        if (image){
            img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            img.setAttribute("alt", `Photo  ${title}`)
            }else {
                img = document.createElement( 'video' );
                img.controls = true;
                img.setAttribute("src", picture)
                img.setAttribute("type", 'video/mp4')
                img.setAttribute("alt", `Photo  ${title}`)
            }
        
        const pTitle = document.createElement( 'p' );
        pTitle.innerHTML = `${title}`
        articlePhoto.appendChild(img);
        articlePhoto.appendChild(pTitle);
        return (articlePhoto);
    }
    return { id, photographerId, title, image,video, getLightBoxCardDOM }
}