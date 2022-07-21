const tabList = Array.from(document.querySelectorAll('.tab'));
const tabContentList = Array.from(document.querySelectorAll('.tab__content'));

for (let element of tabList) {
  element.onclick = function() {  
    let ind; 
    for (let i = 0; i < tabList.length; i++) {
      if (tabList[i].className.includes('tab_active')) {
        tabList[i].classList.remove('tab_active');
        tabContentList[i].classList.remove('tab__content_active'); 
        ind = i;
      };
    };
  
    let index = tabList.indexOf(element);

    if (ind !== index) {
      element.classList.add('tab_active'); 
      tabContentList[index].classList.add('tab__content_active'); 
    };
 
    return false;
  };
};