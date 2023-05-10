function getTotalLikes(medias) {
    let likesArray = [];
    medias.forEach((eachMedia) => {
      likesArray.push(eachMedia.likes);
    });
    return likesArray.reduce(addAllLikes);
}

function addAllLikes(total, num) {
    return total + num
}

function addLikeListeners(pLikes){
  pLikes.addEventListener('keyup', function(e){
    if (e.code === 'Enter' && document.getElementById('main').getAttribute('aria-hidden') == 'false') {
        let wNumber = pLikes.innerHTML.split(' ');
        
        if(pLikes.classList.contains('isLiked')){
            parent.isLiked=false;
            pLikes.innerHTML = `${Number(wNumber[0])-1} <i class="fa-solid fa-heart"></i>`;
            currentLikes -=1;
            pLikes.classList.remove('isLiked');
        }else{
            parent.isLiked = true;
            pLikes.innerHTML = `${Number(wNumber[0])+1} <i class="fa-solid fa-heart"></i>`;
            currentLikes +=1;
            pLikes.classList.add('isLiked');
    }
    const divLikesPrice = document.getElementById('divLikesPrice');
    divLikesPrice.remove();
    const asideLikesPrice = document.querySelector(".asideLikesPrice");
    const likesPriceModel = likesPriceFactory(currentPhotographer);
    const likesPriceDOM = likesPriceModel.getLikesPriceDom();
    asideLikesPrice.appendChild(likesPriceDOM);
    }
  });
pLikes.addEventListener("click", function(){            
    let wNumber = pLikes.innerHTML.split(' ');
    if(pLikes.classList.contains('isLiked')){
        pLikes.innerHTML = `${Number(wNumber[0])-1} <i class="fa-solid fa-heart"></i>`
        currentLikes -=1;
        pLikes.classList.remove('isLiked');
    }else{
        pLikes.innerHTML = `${Number(wNumber[0])+1} <i class="fa-solid fa-heart"></i>`
        currentLikes +=1;
        pLikes.classList.add('isLiked');
    }
    const divLikesPrice = document.getElementById('divLikesPrice');
    divLikesPrice.remove();
    const asideLikesPrice = document.querySelector(".asideLikesPrice");
    const likesPriceModel = likesPriceFactory(currentPhotographer);
    const likesPriceDOM = likesPriceModel.getLikesPriceDom();
    asideLikesPrice.appendChild(likesPriceDOM);
  });
}