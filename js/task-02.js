const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/* Напиши скрипт, который для каждого элемента массива ingredients:

1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2 Добавит название ингредиента как его текстовое содержимое.
3 Добавит элементу класс item.
4 После чего вставит все <li> за одну операцию в список ul.ingredients. */

/* -----из головы------
const ul = document.querySelector('#ingredients');

const liList = [...ingredients].map(function (el, index) {
  const liItem = document.createElement('li');
  liItem.textContent = ingredients[index];
  liItem.classList = 'item';
  ul.appendChild(liItem);
});

console.log(ul);
console.log([...ingredients]); */

/* ------После просмотра Репеты =) -------*/

const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const ingredientEL = document.createElement('li');
  ingredientEL.textContent = option;
  ingredientEL.classList = 'item';

  return ingredientEL;
});

ingredientsContainerEl.append(...elements);

console.log(ingredientsContainerEl);
