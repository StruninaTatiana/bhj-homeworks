
const outputTimer = document.getElementById('timer');

const countdown = function() {
  if (+outputTimer.textContent === 0) {
    clearInterval(idInterval);
    alert('Вы победили в конкурсе'); 
    return;
  };

  outputTimer.textContent = Number(outputTimer.textContent) - 1;
};

const idInterval = setInterval(countdown, 1000);