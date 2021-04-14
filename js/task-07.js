// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



fontSizeControlEl.addEventListener('input', function () {
    let size = fontSizeControlEl.value;    
    textEl.style.fontSize = size + 'px';
});



// fontSizeControlEl.dispatchEvent(new Event('input'))
// привязывает размер шрифта к значению ползунка при загрузке страницы (нужно установить значение ползунка по умолчанию, что бы не прыгал размер текста при загрузке)
