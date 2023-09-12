'use strict'

const square = document.querySelector('#square');

let x = 0;
let y = 0;

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 37:
            if (x <= 0) {
                square.style.left = (x -= 0) + 'px';
            } else {
                square.style.left = (x -= 5) + 'px';
            }
            break;
        case 38:
            if (y <= 0) {
                square.style.top = (y -= 0) + 'px';
            } else {
                square.style.top = (y -= 5) + 'px';
            }
            break;
        case 39:
            if (x >= 326) {
                square.style.left = (x += 0) + 'px';
            } else {
                square.style.left = (x += 5) + 'px';
            }
            break;
        case 40:
            if (y >= 326) {
                square.style.top = (y += 0) + 'px';
            } else {
                square.style.top = (y += 5) + 'px';
            }
            break;
    }
});






