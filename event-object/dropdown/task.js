const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item '));
const dropdownValue = document.querySelector('.dropdown__value');


for (let element of dropdownItem) {
  
  element.onclick = function() {    
    dropdownValue.textContent = element.textContent;
    dropdownList.classList.remove('dropdown__list_active');
    return false;
  };
};


dropdownValue.onclick = function() {

  if (dropdownList.className.includes('dropdown__list_active')) {
    dropdownList.classList.remove('dropdown__list_active');
    return;
  };

  dropdownList.classList.add('dropdown__list_active'); 
  return false;
};


