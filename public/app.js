window.onload = function(){

  let view = {
    renderList: function(){
      for (let i=0; i< data.cats.length; i++){
        let catListItem = `<li data-id=${data.cats[i].id}> ${data.cats[i].name}</li>`

        document.querySelector('.cat-list').innerHTML += catListItem;
      }
    }
  };

  let data = {
    cats : [
      {
        id: 0,
        name: 'Cherry Pie', 
        url: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg',
        clickCount: 0
      }, 
      {
        id: 1,
        name: 'Water Bottle', 
        url: 'https://www.pets4homes.co.uk/images/articles/1646/large/kitten-emergencies-signs-to-look-out-for-537479947ec1c.jpg',
        clickCount: 0
      },
      {
        id: 2,
        name: 'Brown Chair', 
        url: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1455596221531/',
        clickCount: 0
      }
    ]
  };

  let controller = {
      init: function(){
        view.renderList()
      }
  };
  
  let getCatObj = function(eventAndTargetDetails){
    let catId = eventAndTargetDetails;
    let cat = data.cats[catId]

    return cat
  }

  let increaseCount = function(e){
    if (e.target.nodeName === 'IMG'){

      let cat = getCatObj(e.target.parentElement.dataset.id);

      cat.clickCount = cat.clickCount + 1;

      e.target.nextElementSibling.firstElementChild.innerText = ` ${cat.clickCount}`;
    }
  }
    
  let findCat = function(e){
    if (e.target.nodeName === 'LI'){
      
      let cat = getCatObj(e.target.dataset.id);

      return showCat(cat)
    }
  }

  let showCat = function(cat){
    document.querySelector('.cat-container').innerHTML = "";

    let catHTML = ` 
      <div class="cat" data-id=${cat.id}>
          <img class="cat__image" src=${cat.url} alt="cute cat"/>
          <div class="cat__text">${cat.name} Clicks:<span class="cat__text--number"> ${cat.clickCount}</span></div>
      </div>`

    document.querySelector('.cat-container').innerHTML += catHTML;
  }

  

  document.querySelector('.cat-list').addEventListener('click', findCat)
  document.querySelector('.cat-container').addEventListener('click', increaseCount);

  controller.init();
}