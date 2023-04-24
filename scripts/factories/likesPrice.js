function likesPriceFactory(dataPhotographer, dataMedia) {
    const { price } = dataPhotographer;    
    const { likes } = dataMedia;

    function getLikesPriceDom(){
        const divLikesPrice = document.createElement( 'div' );
        
        const pLikes = document.createElement('p');
        pLikes.innerHTML = `${getTotalLikes(dataMedia)} <i class="fa-solid fa-heart"></i>`
        const pPrice = document.createElement('p');
        pPrice.innerHTML = `${price}€/jour`
        divLikesPrice.appendChild(pLikes);
        divLikesPrice.appendChild(pPrice);
        return (divLikesPrice) ;
    }
    return { likes, price, getLikesPriceDom }
}