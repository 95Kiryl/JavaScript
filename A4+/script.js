'use strict'

// A4+ с объектом

let insideOut = '';
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

    if (newStr.length === 0) {
        return;
    } else {
        insideOut += newStr[newStr.length - 1];
        palindrom(newStr.slice(0, -1));
    }
    return newStr.toLowerCase() === insideOut.toLowerCase() ? 'Это палиндром' : 'Не палиндром';
}
console.log(palindrom('HelLo WoRLd'));
// console.log(palindrom('lO O l'));
// console.log(palindrom('1,00,1'));
// console.log(palindrom('123'));
// console.log(palindrom('АнНа'));
// console.log(palindrom('Ароза, Упала на ЛапУ азора'));
// console.log(palindrom('аъён ,Е ьа'));


// A4+ с объектом и замыканием

function closure(str) {
    let insideOut = '';
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
    palindrom(newStr);
    function palindrom(newStr) {
        if (newStr.length === 0) {
            return;
        } else {
            insideOut += newStr[newStr.length - 1];
            palindrom(newStr.slice(0, -1));
        }
    }
    return newStr.toLowerCase() === insideOut.toLowerCase() ? 'Это палиндром' : 'Не палиндром';
}
console.log(closure('HelLo WoRLd'));
console.log(closure('lO O l'));
console.log(closure('1,00,1'));
console.log(closure('123'));
console.log(closure('АнНа'));
console.log(closure('Ароза, Упала на ЛапУ азора'));
console.log(closure('аъён ,Е ьа'));
