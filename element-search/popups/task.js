document.getElementById('modal_main').classList.add('modal_active');

const elementsClose = Array.from(document.getElementsByClassName('modal__close'));

for(let element of elementsClose) {
  element.onclick = function() {
    this.closest('.modal').classList.remove('modal_active');
    //document.getElementById('modal_main').classList.remove('modal_active'); нужно убрать
  };
};

const elementsSuccess = Array.from(document.getElementsByClassName('show-success'));

for(let element of  elementsSuccess) {
  element.onclick = function() {
    this.closest('.modal').classList.remove('modal_active');
    document.getElementById('modal_success').classList.add('modal_active');
  };
};


