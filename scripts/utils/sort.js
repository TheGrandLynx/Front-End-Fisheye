
// Fonction pour trier les médias
function sort(medias, option) {
    switch (option) {
      case 'Popularité':
        return medias.sort((a, b) => b.likes - a.likes)
      case 'Date':
        return medias.sort((a, b) => new Date(a.date) - new Date(b.date))
      case 'Titre':
        return medias.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return medias
    }
  }

  
function init(){
  document.querySelector('.sortSelect').addEventListener('focus', function(e){
    document.querySelector('.sortSelect').classList.toggle('sortSelectActive');
  })
  document.querySelector('.sortSelect').addEventListener('focusout', function(e){
    document.querySelector('.sortSelect').classList.toggle('sortSelectActive');
  })
  let sortCategory = ['Popularité', 'Date', 'Titre'];
  const sortSelect = document.querySelector('.sortSelect');
  for(let i = 0; i < sortCategory.length; i++){
    const optSelect = document.createElement('option');
    optSelect.setAttribute('value', i);
    const itmTextNode = document.createTextNode(sortCategory[i]);
    optSelect.appendChild(itmTextNode);
    if(i!=0){
      const hrSelect = document.createElement('hr');
      sortSelect.appendChild(hrSelect);
    }
    sortSelect.appendChild(optSelect);
  }
}

init();
  