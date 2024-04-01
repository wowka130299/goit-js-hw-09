// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', inputHandle);
form.addEventListener('submit', submitHandle);

const LS_INPUT = 'feedback-form-state';

const storedData = JSON.parse(localStorage.getItem(LS_INPUT));
if (storedData) {
  input.value = storedData.email ?? '';
  textarea.value = storedData.message ?? '';
}

function inputHandle(event) {
  let formData = {
    email: event.currentTarget.elements.email.value.trim(),
    message: event.currentTarget.elements.message.value.trim(),
  };
  localStorage.setItem(LS_INPUT, JSON.stringify(formData));
}

function submitHandle(event) {
  event.preventDefault();
  if (input.value !== '' && textarea.value !== '') {
    console.log(JSON.parse(localStorage.getItem(LS_INPUT)));
    localStorage.removeItem(LS_INPUT);
    form.reset();
  } else {
    alert('Fill both fields!');
  }
}

// localStorage.clear();
