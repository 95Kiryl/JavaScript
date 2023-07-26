'use strict'

let surname;

do {
    surname = prompt('Введите вашу фамилию', '');
} while (surname === '' || surname.length > 30 || isNaN(parseInt(surname)) === false);

let name;

do {
    name = prompt('Введите ваше имя', '');
} while (name === '' || name.length > 30 || isNaN(parseInt(name)) === false);

let patronymic;

do {
    patronymic = prompt('Введите ваше отчество', '');
} while (patronymic === '' || patronymic.length > 30 || isNaN(parseInt(patronymic)) === false);

let age;

do {
    age = Number(prompt('Введите ваш возраст', ''));
} while (isNaN(age) || Number.isInteger(age) === false || age <= 0);


const gender = confirm('Ваш пол мужской?'),
    ageInDays = age * 365,
    afterFiveYears = age + 5,
    male = 'Мужской',
    female = 'Женский',
    answerTrue = 'да',
    answerFalse = 'нет';



if (gender === true && age >= 63) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${ageInDays}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${male}
    вы на пенсии: ${answerTrue}`);
} else if (gender === true && age <= 63) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${ageInDays}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${male}
    вы на пенсии: ${answerFalse}`);
} else if (gender === false && age >= 58) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${ageInDays}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${female}
    вы на пенсии: ${answerTrue}`);
} else if (gender === false && age <= 58) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${ageInDays}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${female}
    вы на пенсии: ${answerFalse}`);
};

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