'use strict';

// Домашняя N.07 Домашнее задание VOWELS

const newString = prompt('Введите строку и узнайте количество гласных букв в ней', '');

function getVowels(str) {
    str = str.toLowerCase();
    let meaning = '';
    let quantity = 0;
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            quantity += 1;
            meaning += str[i];
        } else {
            continue;
        }
    }
    console.log(`В строке ${quantity} гласных, ${meaning}`);
}

console.log(getVowels(newString));