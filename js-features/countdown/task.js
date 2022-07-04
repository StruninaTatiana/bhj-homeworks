
let outputTimer = document.getElementById('timer');

let countdown = function() {
  if (+outputTimer.textContent === 0) {
    clearInterval(1);
    alert('Вы победили в конкурсе'); 
    return;
  };

  outputTimer.textContent = Number(outputTimer.textContent) - 1;
};

setInterval(countdown, 1000);
