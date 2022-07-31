const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

for (let element of interestCheck) {
 
  element.onchange = () => {
    let a = Array.from(element.closest('.interest').querySelectorAll('.interest__check'));
 
    for (let el of a) {
      el.checked = element.checked;
    };  
  };
};

