const category = document.querySelectorAll('.item');

console.log('Number of categories:', category.length);
console.log('');
console.log();
category.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});



// const categNum = document.querySelector('#categories')
// console.log('Number of categories:', categNum.children.length);

// const itemsEl = document.querySelectorAll('.item');



// for (const item of itemsEl) {
//     console.log('Category:', item.firstElementChild.textContent);
//     const elem = item.querySelector('ul');
//     console.log('Elements:', elem.children.length);

    
// }
// -------------------------------------

// const firstCategory = itemsEl[0].firstElementChild;
// console.log('Category:', firstCategory.textContent);

// const firstCategoryElements = firstCategory.nextElementSibling;
// console.log('Elements:', firstCategoryElements.children.length);

// const secondCategory = itemsEl[1].firstElementChild;
// console.log('Category:', secondCategory.textContent);

// const secondCategoryElements = secondCategory.nextElementSibling;
// console.log('Elements:', secondCategoryElements.children.length);

// const thirdCategory = itemsEl[2].firstElementChild;
// console.log('Category:', thirdCategory.textContent);

// const thirdCategoryElements = thirdCategory.nextElementSibling;
// console.log('Elements:', thirdCategoryElements.children.length);



