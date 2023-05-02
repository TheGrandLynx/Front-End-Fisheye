function mediaFactory(data) {
    const { id, photographerId, title, image,video, likes, date, price } = data;
    let picture;
    let isLiked = false;
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
        pLikes.addEventListener("click", function(e){
            const divLikesPrice = document.getElementById('divLikesPrice');
            divLikesPrice.remove();
            currentLikes +=1;
            const asideLikesPrice = document.querySelector(".asideLikesPrice");
    const likesPriceModel = likesPriceFactory(currentPhotographer);
    const likesPriceDOM = likesPriceModel.getLikesPriceDom();
    asideLikesPrice.appendChild(likesPriceDOM);
    console.log(currentLikes)
            let wNumber = pLikes.innerHTML.split(' ');
            console.log(Number(wNumber[0])+1);
            if(isLiked){
                isLiked=false;
                pLikes.innerHTML = `${Number(wNumber[0])-1} <i class="fa-solid fa-heart"></i>`
                pLikes.classList.remove('isLiked');
            }else{
                isLiked = true;
                pLikes.innerHTML = `${Number(wNumber[0])+1} <i class="fa-solid fa-heart"></i>`
                pLikes.classList.add('isLiked');
            }
        });
        divPhotoDescription.appendChild(pTitle);
        divPhotoDescription.appendChild(pLikes);
        articlePhoto.appendChild(img);
        articlePhoto.appendChild(divPhotoDescription);
        return (articlePhoto);
    }

    return { id, photographerId, title, image, likes, date, price, getImageCardDOM }
}
