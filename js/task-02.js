const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`


const ingredientsListEl = document.querySelector('#ingredients')

const ingredientsItem = [];

ingredients.forEach(element => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.classList.add('ingredients.item')
    ingredientItemEl.textContent = element;
    ingredientsItem.push(ingredientItemEl)
});

console.log(ingredientsItem);
ingredientsListEl.append(...ingredientsItem);
