const div = Array.from(document.querySelectorAll('div'));

for (let element of div) {

  if (element.className.includes('reveal')) {

    document.addEventListener('scroll', () => {    
      const { top, bottom } = element.getBoundingClientRect();
      let inViewport1 = top < window.innerHeight ? true : false;
      let inViewport2 = bottom < 0 ? true : false;

      if (inViewport1 !== inViewport2) {
        element.classList.add('reveal_active')
      };

      if (inViewport1 === inViewport2) {
        element.classList.remove('reveal_active')
      };  
    });
  };
} 
