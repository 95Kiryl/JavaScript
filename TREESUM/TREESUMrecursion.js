'use strict';

// Домашняя N.05 Домашнее задание TREESUM с рекурсией

const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function treeSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            sum += treeSum(elem);
        } else {
            sum += elem;
        }
    }
    return sum;
}

console.log(treeSum(arr));