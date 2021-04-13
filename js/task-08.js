// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.



const inputEl = document.querySelector('[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');


boxesEl.classList.add('boxes-div');


const randomRgb = () => {
    const rgbNum = () => Math.floor(Math.random() * 256);
    const r = rgbNum();
    const g = rgbNum();
    const b = rgbNum();
    return `rgb(${r},${g},${b})`;
};


let newBoxes = [];

function createBoxes(amount) {
    let size = 30;
    for (let i =1; i <= amount; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-box');
        newDiv.style.backgroundColor = randomRgb();
        newDiv.style.width = size + 'px';
        newDiv.style.height = size + 'px';
        size += 10;
        newBoxes.push(newDiv);
    }
    return boxesEl.append(...newBoxes);
}


function onRemoveNewBoxes(event) {
    let element = document.querySelectorAll('.new-box');
    element.forEach(el => {
        el.parentNode.removeChild(el);
    });
    return newBoxes = [];
}


renderBtn.addEventListener('click', function () {
    const quantity = inputEl.value;
    createBoxes(quantity);
    boxesEl.append(...newBoxes);
    inputEl.value = 0;
    
});

destroyBtn.addEventListener('click', onRemoveNewBoxes);