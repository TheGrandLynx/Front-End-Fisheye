function mediaFactory(data) {
    const { id, photographerId, title, image,video, likes, date, price } = data;
    let picture;
    if (image){
        
    picture = `assets/images/${photographerId}/${image}`;
    }else {
        
    picture = `assets/images/${photographerId}/${video}`;
    }
    console.log(image);
    console.log(picture);
    function getImageCardDOM() {
        
        const articlePhoto = document.createElement( 'article' );
        let img ;
        
        if (image){
            img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            img.setAttribute("alt", `Photo  ${title}`)
            img.setAttribute("id", `${id}`)
            
            }else {
                img = document.createElement( 'video' );
                img.setAttribute("src", picture)
                img.setAttribute("alt", `Photo  ${title}`)
                img.setAttribute("id", `${id}`)
            }
        const divPhotoDescription = document.createElement( 'div' );
        const pTitle = document.createElement( 'p' );
        pTitle.innerHTML = `${title}`
        const pLikes = document.createElement( 'p' );
        pLikes.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`
        divPhotoDescription.appendChild(pTitle);
        divPhotoDescription.appendChild(pLikes);
        articlePhoto.appendChild(img);
        articlePhoto.appendChild(divPhotoDescription);
        return (articlePhoto);
    }

    return { id, photographerId, title, image, likes, date, price, getImageCardDOM }
}
