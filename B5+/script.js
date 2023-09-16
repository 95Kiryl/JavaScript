'use strict'

function buildWrapper(tag) {
    return function string(str) {
        return function attribute(atr) {
            let newStr = '';
            let newAttribute = '';
            let objAttribute = '';
            let resultAttribute = '';
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

            if (atr === undefined) {
                return `<${tag}>${newStr}</${tag}>`
            } else {
                objAttribute = Object.entries(atr).flat();
                for (let k = 0; k < objAttribute.length; k++) {
                    if (k % 2 === 0) {
                        newAttribute += `${objAttribute[k]}:`;
                    } else {
                        newAttribute += `${objAttribute[k]} `;
                    }
                }

                for (let j = 0; j < newAttribute.length; j++) {
                    if (obj.hasOwnProperty(newAttribute[j])) {
                        resultAttribute += obj[newAttribute[j]];
                    } else {
                        resultAttribute += newAttribute[j];
                    }
                }
                return `<${tag} ${resultAttribute}>${newStr}</${tag}>`
            }

        }
    }
}

const wrapH1 = buildWrapper('H1');
const wrapP = buildWrapper("P");

console.log(wrapP('Однажды в студеную зимнюю пору')());
console.log(wrapP('Однажды в студеную зимнюю пору')({ lang: 'ru' }));
console.log(wrapP('Однажды в <студеную> зимнюю пору')());
console.log(wrapH1('СТИХИ')({ align: 'center', title: "Вкусные M&M's" }));





