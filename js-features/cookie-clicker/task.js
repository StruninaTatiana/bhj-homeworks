let outputClick = document.getElementById('clicker__counter');
let cookieClick = document.getElementById('cookie');

cookieClick.onclick = function() {
  outputClick.textContent = Number(outputClick.textContent) + 1;

  if (cookieClick.width === 200) {
    cookieClick.width = 250;
  } else {
    cookieClick.width = 200;
  };
};


