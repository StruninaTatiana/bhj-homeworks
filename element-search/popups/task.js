document.getElementById('modal_main').classList.add('modal_active');

let elementsClose = Array.from(document.getElementsByClassName('modal__close'));

for(let i = 0; i < elementsClose.length; i++) {
  elementsClose[i].onclick = function() {
    document.getElementById('modal_main').classList.remove('modal_active');
    document.getElementById('modal_success').classList.remove('modal_active');

  };
};

let elementsSuccess = Array.from(document.getElementsByClassName('show-success'));

for(let i = 0; i < elementsSuccess.length; i++) {
  elementsSuccess[i].onclick = function() {
    document.getElementById('modal_success').classList.add('modal_active');
  };
};
