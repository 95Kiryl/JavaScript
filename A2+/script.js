'use strict';

// Домашняя A2+

const answer = prompt('Введите любую строку с пробелами или без', '');

function string(str) {
    let i = 0;
    while (str.startsWith(' ') && i < str.length) {
        str = str.slice(1);
        i++;
    }

    let j = 0;
    while (str.endsWith(' ') && j < [str.length - 1]) {
        str = str.slice(0, [str.length - 1]);
        j++;
    }
    return `@${str}@`;
}


console.log(string(answer));