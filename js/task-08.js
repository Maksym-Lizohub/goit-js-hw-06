/* Задание 8

Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

1. Обработка отправки формы form.login-form должна быть по событию submit.
2. При отправке формы страница не должна перезагружаться.
3. Если в форме есть незаполненные поля, выводи alert с предупреждением о 
том, что все поля должны быть заполнены.
4. Если пользователь заполнил все поля и отправил форму, 
собери значения полей в обьект, где имя поля будет именем свойства, 
а значение поля - значением свойства. Для доступа к элементам формы 
используй свойство elements.
5. Выведи обьект с введенными данными в консоль и очисти значения 
полей формы методом reset. */

/* const refs = {
  onform: document.querySelector('.login-form'),
};

refs.onform.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value.includes('@') || password.value.length < 6) {
    alert(`Все поля должны быть заполнены. Пароль не менее 6 символов`);
  } else {
    const objToSubmit = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
  }
}); */

const refs = {
  onform: document.querySelector('.login-form'),
};

function onSendForm(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email !== '' && password !== '') {
    const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert('Все поля должны быть заполнены.');
  }
}

refs.onform.addEventListener('submit', onSendForm);
