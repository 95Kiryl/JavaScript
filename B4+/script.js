'use strict'

function buildWrapper(str) {
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

    let resultH1 = document.createElement('h1');
    resultH1.textContent = newStr;
    return console.log(resultH1);
}

const wrapH1 = buildWrapper('стихи');


function buildWrapperP(string) {
    let newString = '';
    const obj = {
        '<': '&lt;',
        '>': '&gt;',
        "'": '&apos;',
        '"': '&quot;',
        '&': '&amp;',
    }

    for (let i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])) {
            newString += obj[string[i]];
        } else {
            newString += string[i];
        }
    }
    let resultP = document.createElement('p');
    resultP.textContent = newString;
    return console.log(resultP);
}

// const wrapP = buildWrapperP('Однажды в студеную зимнюю пору');
const wrapP = buildWrapperP("Вкусные M&M's");



