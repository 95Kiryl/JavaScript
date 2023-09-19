'use strict'

// with use method arrays FOREACH;

const newString = prompt('Введите строку и узнайте количество гласных букв в ней', '');

function getVowels(str) {
    str = str.toLowerCase();
    let meaning = '';
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    str.split('')
        .forEach((i) => vowels.includes(i) ? meaning += i : meaning += '');
    console.log(`В строке гласныe: ${meaning}`);
}

console.log(getVowels(newString));



// with use method arrays FILTER;

// const newString = prompt('Введите строку и узнайте количество гласных букв в ней', '');

// function getVowels(str) {
//     str = str.toLowerCase().split('');
//     const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
//     let newArr = str.filter((i) => vowels.includes(i)).join('');
//     console.log(`В строке гласные: ${newArr}`);
// }

// console.log(getVowels(newString));



// with use method arrays REDUCE;

// const newString = prompt('Введите строку и узнайте количество гласных букв в ней', '');

// function getVowels(str) {
//     str = str.toLowerCase().split('');
//     const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
//     let newArr = str.reduce((acc, i) => vowels.includes(i) ? acc += i : acc += '', '');
//     console.log(`В строке гласные: ${newArr}`);
// }

// console.log(getVowels(newString));




