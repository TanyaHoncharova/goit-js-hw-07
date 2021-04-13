
const categoriesEL = document.querySelector('#categories');
const allCaterogy = document.querySelectorAll('li.item');


function allCategoriesCount() {
  const q = allCaterogy.length;
  console.log(`В списке ${q} категории.`);
  return `В списке ${q} категории.`;
}

allCategoriesCount();

function allCategoryContent(list) {
  allCaterogy.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent} `);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
  })
}
allCategoryContent(allCaterogy);