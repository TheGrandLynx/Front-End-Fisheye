function getTotalLikes(medias) {
    let likesArray = []
    medias.forEach((eachMedia) => {
      likesArray.push(eachMedia.likes)
    })
    console.log('likes'+likesArray)
    return likesArray.reduce(addAllLikes)
}

function addAllLikes(total, num) {
    return total + num
}