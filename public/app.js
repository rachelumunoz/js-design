window.onload = function(){

  let counter = 0;
  
  let increaseCount = function(e){
    if (e.target.nodeName === 'IMG'){

      let catId = e.target.parentElement.dataset.id;
      let cat = cats[catId]; 
      cat.clickCount = cat.clickCount + 1;

      e.target.nextElementSibling.firstElementChild.innerText = ` ${cat.clickCount}`;
    }
  }
  
  let cat1 = {
    id: 0,
    name: 'Cherry Pie', 
    url: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg',
    clickCount: 0
  };

  let cat2 = {
    id: 1,
    name: 'Water Bottle', 
    url: 'https://www.pets4homes.co.uk/images/articles/1646/large/kitten-emergencies-signs-to-look-out-for-537479947ec1c.jpg',
    clickCount: 0
  };

  let cats = [cat1, cat2];

  for (let i=0; i< cats.length; i++){
    let cat = ` 
      <div class="cat" data-id=${cats[i].id}>
          <img class="cat__image" src=${cats[i].url} alt="cute cat"/>
          <div class="cat__text">${cats[i].name} Clicks:<span class="cat__text--number"> ${cats[i].clickCount}</span></div>
      </div>`

    document.querySelector('.cat-container').innerHTML += cat;

  }
  
  document.querySelector('.cat-container').addEventListener('click', increaseCount);
  
}