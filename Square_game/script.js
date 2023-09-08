'use strict'

const square = document.querySelector('#square');

let x = 0;
let y = 0;

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 37:
            if (x <= 0) {
                x -= 0;
                square.style.left = x + 'px';
            } else {
                x -= 5;
                square.style.left = x + 'px';
            }
            break;
        case 38:
            if (y <= 0) {
                y -= 0;
                square.style.top = y + 'px';
            } else {
                y -= 5;
                square.style.top = y + 'px';
            }
            break;
        case 39:
            if (x >= 326) {
                x += 0;
                square.style.left = x + 'px';
            } else {
                x += 5;
                square.style.left = x + 'px';
            }
            break;
        case 40:
            if (y >= 326) {
                y += 0;
                square.style.top = y + 'px';
            } else {
                y += 5;
                square.style.top = y + 'px';
            }
            break;
    }
});






