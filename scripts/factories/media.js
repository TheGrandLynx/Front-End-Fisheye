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
            img.addEventListener("click", function(e){
                //alert(`image : ${image}`);
                const lightBoxMedia = document.querySelector(".media_name_container");
                const lightBoxModel = lightBoxFactory(data);
                const lightBoxCardDOM = lightBoxModel.getLightBoxCardDOM();
                lightBoxMedia.appendChild(lightBoxCardDOM);
                displayLightBox();

            })
            }else {
                img = document.createElement( 'video' );
                img.setAttribute("src", picture)
                img.setAttribute("alt", `Photo  ${title}`)
                img.addEventListener("click", function(e){
                    //const target = e.target.closest("#btnPrepend"); // Or any other selector.
    
                    alert(`video : ${video}`);
                })
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
