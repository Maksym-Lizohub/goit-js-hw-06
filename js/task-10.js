/* Задание 10 (выполнять не обязательно)

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
 количество элементов в input и нажимает кнопку Создать, после чего 
 рендерится коллекция. При нажатии на кнопку Очистить, коллекция 
 элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр
 - число. Функция создает столько <div>, сколько указано в amount и 
 добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего
 на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй
 готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
тем самым удаляя все созданные элементы. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = 0;

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => {
  amount = Number(refs.input.value);
  console.log(amount);
  return amount;
});

console.log(amount);

function createBoxes(amount) {
  const boxSet = amount;
  for (let box of boxSet) {
    box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();

    box.style.width = ;
    box.style.height = ;

    refs.boxes.insertAdjacentElement('beforeend', element);
  }
}

refs.destroyBtn.addEventListener('click', () => {
  refs.boxes.children.remove();
});


