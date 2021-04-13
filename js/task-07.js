// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.setAttribute('min', '40px');
fontSizeControlEl.setAttribute('max', '300px');
fontSizeControlEl.setAttribute('step', '5px');

fontSizeControlEl.addEventListener('input', function () {
    let size = fontSizeControlEl.min;
    size = fontSizeControlEl.value;
    textEl.style.fontSize = size + 'px';
});