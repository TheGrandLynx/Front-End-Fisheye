function likesPriceFactory(dataPhotographer) {
    const { price } = dataPhotographer;    

    function getLikesPriceDom(){
        const divLikesPrice = document.createElement( 'div' );
        divLikesPrice.setAttribute("id", `divLikesPrice`)
            
        
        const pLikes = document.createElement('p');
        pLikes.innerHTML = `${currentLikes} <i class="fa-solid fa-heart"></i>`
        const pPrice = document.createElement('p');
        pPrice.innerHTML = `${price}€/jour`
        divLikesPrice.appendChild(pLikes);
        divLikesPrice.appendChild(pPrice);
        return (divLikesPrice) ;
    }
    return { price, getLikesPriceDom }
}