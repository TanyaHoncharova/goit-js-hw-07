// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputEl = document.getElementById('validation-input');

let a = '';
function onCheckInputLength (event) {
    a = (event.currentTarget.value);
    console.log(a.length)
    return a;
};




inputEl.addEventListener('input', onCheckInputLength);

inputEl.addEventListener('blur', function (onCheckInputLength)  {
    if (a.length >= 6) {
        inputEl.classList.add('.validation-input.valid');
        console.log('valid');
        // console.log(inputEl.classList);
    
} else {
    inputEl.classList.add('.validation-input.invalid');
    console.log('invalid');
    // console.log(inputEl.classList);
}
});
