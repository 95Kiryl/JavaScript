'use strict';

// Домашняя А3+

function palindrom(str) {
    let insideOut = '';
    str = str.toLowerCase().replaceAll(' ', '').replaceAll(',', '').replaceAll('ё', 'е').replaceAll('ъ', 'ь');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            insideOut += str[i];
        } else {
            return (`Не палиндром`);
        }

        if (str === insideOut) {
            return `Это палиндром`;
        }
    }
}


console.log(palindrom('HelLo WoRLd'));
console.log(palindrom('lO O l'));
console.log(palindrom('1,00,1'));
console.log(palindrom('123'));
console.log(palindrom('АнНа'));
console.log(palindrom('Ароза, Упала на ЛапУ азора'));
console.log(palindrom('аъён ,Е ьа'));