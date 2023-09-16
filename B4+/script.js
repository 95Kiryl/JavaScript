'use strict'

function buildWrapper(tag) {
    return function wrapper(str) {
        let newStr = '';
        const obj = {
            '<': '&lt;',
            '>': '&gt;',
            "'": '&apos;',
            '"': '&quot;',
            '&': '&amp;',
        }
        for (let i = 0; i < str.length; i++) {
            if (obj.hasOwnProperty(str[i])) {
                newStr += obj[str[i]];
            } else {
                newStr += str[i];
            }
        }

        return `<${tag}>${newStr}</${tag}>`
    }
}

const wrapH1 = buildWrapper('H1');
const wrapP = buildWrapper("P");

console.log(wrapH1('СТИХИ'));
console.log(wrapP('Однажды в студеную зимнюю пору'));
console.log(wrapP("Вкусные M&M's"));






