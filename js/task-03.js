const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// const galleryEl = document.querySelector('#gallery');
// const elements = images.map(image => {
//     const galleryElementEl = document.createElement('li')
//     galleryElementEl.classList.add('gallery-item');
//     const ImagesItem = document.createElement('img');
//     ImagesItem.classList.add('photo')
//     ImagesItem.src = image.url;
//     ImagesItem.alt = image.alt;

//     galleryElementEl.appendChild(ImagesItem);    
  
   
//     return galleryElementEl;
// });   
    
// galleryEl.append(...elements);

// -------------------------------------------------

const galleryEl = document.querySelector('#gallery');
const elements = images.map(image => {
  const galleryElementEl =
    ` <li class="gallery-item" > <img class = "photo" src = " ${image.url}"
   alt = " ${image.alt}" >
   </li>`;
  return galleryEl.insertAdjacentHTML('beforeend', galleryElementEl);
});
