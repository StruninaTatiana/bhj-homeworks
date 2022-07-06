const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

let i = 0;

arrowPrev.onclick = function() {
  sliderItems[i].classList.remove('slider__item_active');    
  if (i === 0) {
    i = 4;
  } else {
    i--;
  }
  sliderItems[i].classList.add('slider__item_active');
};

arrowNext.onclick = function() {
  sliderItems[i].classList.remove('slider__item_active');
  if (i === 4) {
    i = 0;
  } else {
    i++;
  }
  sliderItems[i].classList.add('slider__item_active');
};    
