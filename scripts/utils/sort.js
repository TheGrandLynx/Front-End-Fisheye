let sortCategory = ['Popularité', 'Date', 'Titre'];

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

function removeArticlePhoto(){    
  const mediaSection = document.querySelector(".photoListe");
  mediaSection.replaceChildren();
}

function removeSortChildren(){    
  const sortSelect = document.querySelector('.sortSelect');
  sortSelect.replaceChildren();
}

function moveSortElementToFirst(sortElement){
  const fromIndex = sortCategory.indexOf(sortElement);
const toIndex = 0;

const element = sortCategory.splice(fromIndex, 1)[0];

sortCategory.splice(toIndex, 0, element);
}

function displaySort(){
  removeSortChildren();
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
function sortMedias(){
  const selectSort = document.querySelector(".sortSelect");
  removeArticlePhoto();
  const strSelectedSort =  selectSort.options[selectSort.selectedIndex].text;
  currentMedias = sort(currentMedias, strSelectedSort);
  moveSortElementToFirst(strSelectedSort);
  displaySort();        
  document.querySelector('.sortSelect').classList.remove('sortSelectActive');
  displayMedias(currentMedias);
}
function init(){
    const selectSort = document.querySelector(".sortSelect");
    selectSort.addEventListener("keyup", function (e) {
      if(e.code === 'Enter'){
        sortMedias();
      }
    });
  selectSort.addEventListener('focus', function(){
    document.querySelector('.sortSelect').classList.add('sortSelectActive');
  })
  selectSort.addEventListener('focusout', function(){
    document.querySelector('.sortSelect').classList.remove('sortSelectActive');
  })
  selectSort.addEventListener('click', function(){
    console.log(selectSort.classList.contains('sortSelectActive'))
    if(!selectSort.classList.contains('sortSelectActive')){
      document.querySelector('.sortSelect').classList.add('sortSelectActive');
    }else{
      sortMedias();
    }
  })
  displaySort();
}

init();
  