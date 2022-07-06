let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
}; 

function finishGame(text) {
  alert(text);
  deadMole.textContent = 0;
  lostMole.textContent = 0;
};

for(let i = 1; i < 10; i++) {
  getHole(i).onclick = function() {   
 
    if (getHole(i).className.includes('hole_has-mole')) {  
      deadMole.textContent = Number(deadMole.textContent) + 1;

      if (+deadMole.textContent === 10) {
        finishGame('Вы выиграли');
        return;
      } 

    } else {  
      lostMole.textContent = Number(lostMole.textContent) + 1;

      if (+lostMole.textContent === 5) {
        finishGame('Вы проиграли');
        return;
      };    
    };   
  };
};






