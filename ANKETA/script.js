'use strict';

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
    finaleGender = (gender === true) ? 'Мужской' : 'Женский',
    answer = (gender === true && age >= 63) ? 'да' : (gender === false && age >= 58) ? 'да' : 'нет';

alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${ageInDays}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${finaleGender}
    вы на пенсии: ${answer}`);