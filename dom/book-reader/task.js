const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for(let element of fontSizes) {

  element.onclick = () => {
    let ind; 

    for (let i = 0; i < fontSizes.length; i++) {
     
      if (fontSizes[i].className.includes('font-size_active')) {
        fontSizes[i].classList.remove('font-size_active');  
        ind = i;
      };
    };

    let index = fontSizes.indexOf(element);

    if (ind !== index) {
      element.classList.add('font-size_active');

      if (element.dataset['size'] === 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
      };

      if (element.dataset['size'] === 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
      };

      if (element.dataset['size'] === undefined) {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
      };
    };
 
    return false;
  };
};