'use strict'

// Домашняя А3+ с объектом

function palindrom(str) {
    let newStr = '';
    const strChange = {
        ' ': '',
        ',': '',
        'ё': 'е',
        'ъ': 'ь',
    }

    for (let i = 0; i < str.length; i++) {
        if (strChange.hasOwnProperty(str[i])) {
            newStr += strChange[str[i]];
        } else {
            newStr += str[i];
        }
    }

    for (let k = 0; k < newStr.length; k++) {
        if (newStr[k].toLowerCase() !== newStr[newStr.length - 1 - k].toLowerCase()) {
            return (`Не палиндром`);
        } else {
            continue;
        }
    }
    return `Это палиндром`;
}
console.log(palindrom('HelLo WoRLd'));
console.log(palindrom('lO O l'));
console.log(palindrom('1,00,1'));
console.log(palindrom('123'));
console.log(palindrom('АнНа'));
console.log(palindrom('Ароза, Упала на ЛапУ азора'));
console.log(palindrom('аъён ,Е ьа'));