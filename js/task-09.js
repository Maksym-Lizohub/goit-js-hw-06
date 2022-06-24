/* Задание 9

Напиши скрипт, который изменяет цвета фона элемента <body> 
через инлайн стиль при клике на button.change-color и 
выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  onBtnChangeColor: document.querySelector('.change-color'),
  onBodyColor: document.querySelector('body'),
  onColorText: document.querySelector('.color'),
};

refs.onBtnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  let bckgndColor = getRandomHexColor();
  refs.onBodyColor.style.backgroundColor = bckgndColor;
  refs.onColorText.textContent = bckgndColor;

  console.dir(bckgndColor);
}
