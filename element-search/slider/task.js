const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

arrowPrev.onclick = function() {
  let index = sliderItems.findIndex((elem) => elem.className.includes('slider__item_active'));
  sliderItems[index].classList.remove('slider__item_active'); 
  index === 0 ? index = sliderItems.length - 1 : index--;
  sliderItems[index].classList.add('slider__item_active');
};

arrowNext.onclick = function() {
  let index = sliderItems.findIndex((elem) => elem.className.includes('slider__item_active'));
  sliderItems[index].classList.remove('slider__item_active'); 
  index === sliderItems.length - 1 ? index =  0 : index++;
  sliderItems[index].classList.add('slider__item_active');
};