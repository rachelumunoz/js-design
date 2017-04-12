window.onload = function(){

  let counter = 0;
  let increaseCount = function(){
    counter++

    document.querySelector('.cat__text--number').innerHTML = " " +counter;
  }

  document.querySelector('.cat-container').addEventListener('click', increaseCount);
  
}