let outputClick = document.getElementById('clicker__counter');
let cookieClick = document.getElementById('cookie');

cookieClick.onclick = function() {
  outputClick.textContent = Number(outputClick.textContent) + 1;

  if (outputClick.textContent % 2 === 0) {
    cookieClick.width = 200;
  } else {
    cookieClick.width = 250;
  };
};


