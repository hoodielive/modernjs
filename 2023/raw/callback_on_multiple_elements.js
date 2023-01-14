const nameInput = document.getElementId('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

nameInput.addEventListener('blur', event => {
  event.target.className = '';
});

messageTextArea.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

messageTextArea.addEventListener('blur', event => {
  event.target.className = '';
});

const clockSection = document.getElementById('clock');

function getTime() {
  function pad(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  }
}

const now = new Date();

const hh = pad(now.getHours());
