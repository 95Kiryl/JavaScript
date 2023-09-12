'use strict'

function getCentury(year) {
    return `${Math.ceil(year / 100)} век`;
}

console.log(getCentury(2001));