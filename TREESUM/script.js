'use strict';

// Домашняя N.05 Домашнее задание TREESUM

const array = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function treeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    for (let k = 0; k < arr[i][j].length; k++) {
                        sum += arr[i][j][k];
                    }
                } else {
                    sum += arr[i][j];
                }
            }
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(treeSum(array));