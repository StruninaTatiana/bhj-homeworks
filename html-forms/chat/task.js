const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.querySelector('.chat-widget__input');

const bot = ['Привет!', 'Одну секунду!', 'Подождите еще немного!', 'Ой, всё!'];

function getTime() {
  const time = new Date();
  return time.getHours() + ':' + time.getMinutes();
};

function botMessage() {
  let index = Math.floor(Math.random() * bot.length);
  chatWidgetMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${getTime()} </div>
      <div class="message__text"> ${bot[index]}  </div>
    </div>
  `; 
};

function userMessage(msg) {
  chatWidgetMessages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${getTime()} </div>
      <div class="message__text"> ${msg} </div>
    </div>
  `; 
};

chatWidgetSide.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');

  chatWidgetInput.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
      userMessage(chatWidgetInput.value);
      chatWidgetInput.value = ''; 
      botMessage();
    };    
  });
});

