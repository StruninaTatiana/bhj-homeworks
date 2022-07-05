let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
}; 

for(let i = 1; i < 10; i++) {
  getHole(i).onclick = function() {   
 
    if (getHole(i).className.includes('hole_has-mole')) {  
      deadMole.textContent = Number(deadMole.textContent) + 1;

      if (+deadMole.textContent === 10) {
        alert('Вы выиграли');
        deadMole.textContent = 0;
        lostMole.textContent = 0;
        return;
      } 

    } else {  
      lostMole.textContent = Number(lostMole.textContent) + 1;

      if (+lostMole.textContent === 5) {
        alert('Вы проиграли');
        lostMole.textContent = 0;
        deadMole.textContent = 0;
        return;
      };    
    };   
  };
};






