const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const ingrItem = document.createElement('li');
ingrItem.textContent = ingredient;
ingrItem.classList.add('item');
console.log(ingrItem);
const listEl = document.querySelector('#ingredients')
listEl.appendChild(ingrItem)

}












// const ingrItem = document.createElement('li');
// ingrItem.textContent = ingredients[0]
// ingrItem.classList.add('item');
// console.log(ingrItem);

// const some = document.querySelector('#ingredients')
// some.insertAdjacentElement (ingrItem)






