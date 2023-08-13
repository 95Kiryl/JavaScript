'use strict';

// Домашняя А4+
let insideOut = '';
function palindrom(str) {
    str = str.toLowerCase().replaceAll(' ', '').replaceAll(',', '').replaceAll('ё', 'е').replaceAll('ъ', 'ь');
    if (str.length === 0) {
        return;
    } else {
        insideOut += str[str.length - 1];
        palindrom(str.slice(0, -1));
    }
    return str === insideOut ? 'Это палиндром' : 'Не палиндром';
}


console.log(palindrom('HelLo WoRLd'));
// console.log(palindrom('lO O l'));
// console.log(palindrom('1,00,1'));
// console.log(palindrom('123'));
// console.log(palindrom('АнНа'));
// console.log(palindrom('Ароза, Упала на ЛапУ азора'));
// console.log(palindrom('аъён ,Е ьа'));


// Домашняя А4+ (2 Вариант с замыканием)

function closure(str) {
    let insideOut = '';
    str = str.toLowerCase().replaceAll(' ', '').replaceAll(',', '').replaceAll('ё', 'е').replaceAll('ъ', 'ь');
    palindrom(str);
    function palindrom(str) {
        if (str.length === 0) {
            return;
        } else {
            insideOut += str[str.length - 1];
            palindrom(str.slice(0, -1));
        }
    }
    return str === insideOut ? 'Это палиндром' : 'Не палиндром';
}


console.log(closure('HelLo WoRLd'));
console.log(closure('lO O l'));
console.log(closure('1,00,1'));
console.log(closure('123'));
console.log(closure('АнНа'));
console.log(closure('Ароза, Упала на ЛапУ азора'));
console.log(closure('аъён ,Е ьа'));