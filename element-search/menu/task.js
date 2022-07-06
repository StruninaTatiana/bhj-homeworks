
const menuItems = document.querySelectorAll('.menu__link')

for(let i = 0; i < menuItems.length - 1; i++) {

  if (menuItems[i].closest('.menu_sub') === null && menuItems[i + 1].closest('.menu_sub') !== null) {

    menuItems[i].onclick = function() {

      if (document.querySelector('.menu_active') !== null) {
        document.querySelector('.menu_active').classList.remove('menu_active')
      }

      menuItems[i + 1].closest('.menu_sub').classList.add('menu_active') 
      return false;
    } /* else {
      menuItems[i].onclick = function() {
       // события по клику
      }
    }*/;
  };
};





