const span = Array.from(document.querySelectorAll('span'));
const spanRotatorCases = [];       // массив элементов с классом rotator__case
const rotator = [];                // массив ротаторов страницы

for (let element of span) {

  if (element.className.includes('rotator__case')) {
    spanRotatorCases.push(element)
  };
};

rotator.push(spanRotatorCases);

for (let element of rotator) {

  setInterval(() => {
    let index = element.findIndex((elem) => elem.className.includes('rotator__case_active'));
    element[index].classList.remove('rotator__case_active'); 
    index === element.length - 1 ? index = 0 : index++;
    element[index].classList.add('rotator__case_active');
  }, 1000);
};