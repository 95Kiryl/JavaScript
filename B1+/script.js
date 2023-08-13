'use strict';

let year;

do {
    year = Number(prompt('Введите год', ''));
} while (isNaN(year) || Number.isInteger(year) === false || year <= 0);

function getСentury(year) {
    const century = Math.ceil(year / 100);
    return `${century} век`;
}

console.log(getСentury(year));

