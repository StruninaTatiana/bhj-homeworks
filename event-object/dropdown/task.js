const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));


for (let element of dropdownItem) {

  element.onclick = function() {    
    element.closest('.dropdown__list').previousElementSibling.textContent = element.textContent;
    element.closest('.dropdown__list').classList.remove('dropdown__list_active');
    return false;
  };
};


for (let element of dropdownValue) {

  element.onclick = function() {
    let index = dropdownValue.findIndex((elem) => elem === element);

    if (dropdownList[index].className.includes('dropdown__list_active')) {
      dropdownList[index].classList.remove('dropdown__list_active');
      return;
    };

    dropdownList[index].classList.add('dropdown__list_active'); 
    return false;
  };
};
