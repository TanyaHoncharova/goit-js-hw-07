// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};


const counterEl = document.getElementById('counter');
const incrementBtn = counterEl.querySelector('[data-action="increment"]');
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
const valueEl = document.getElementById('value');



incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
    console.log(counter)

});

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
    console.log(counter);
    
});