/* 1. Посчитает и выведет в консоль количество категорий 
в ul#categories, то есть элементов li.item. */

const categories = document.querySelector('#categories');
console.log('Number of categories: ', categories.children.length);

/* 2. Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
и количество элементов в категории (всех вложенных в него <li>). */

const items = categories.children;

console.log('Category: ', items[0].querySelector('h2').textContent);
console.log('Elements: ', items[0].querySelector('ul').children.length);

console.log('Category: ', items[1].querySelector('h2').textContent);
console.log('Elements: ', items[1].querySelector('ul').children.length);

console.log('Category: ', items[2].querySelector('h2').textContent);
console.log('Elements: ', items[2].querySelector('ul').children.length);

/* попробывать мделать через array.forEach(element => {
    
}); */
