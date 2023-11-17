const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const state = localStorage.getItem('feedback-form-state');
const lodash = require('lodash');

const updateState = lodash.throttle(() => {
  const state = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

form.addEventListener('input', updateState);

if (state) {
  const data = JSON.parse(state);

  email.value = data.email;
  message.value = data.message;
} else {
  email.value = '';
  message.value = '';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  email.value = '';
  message.value = '';

  localStorage.clear();
  console.log(state);
});
