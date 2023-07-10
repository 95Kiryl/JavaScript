'use strict'

const surname = prompt('Введите вашу фамилию', '');
const name = prompt('Введите ваше имя', '');
const patronymic = prompt('Введите ваше отчество', '');
const age = parseInt(prompt('Введите ваш возраст', ''));
const gender = confirm('Ваш пол мужской?');
const daysAge = age * 365;
const afterFiveYears = age + 5;
const male = 'Мужской';
const female = 'Женский';
const answerTrue = 'да';
const answerFalse = 'нет';

if (gender === true && age >= 63) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${daysAge}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${male}
    вы на пенсии: ${answerTrue}`);
} else if (gender === true && age <= 63) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${daysAge}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${male}
    вы на пенсии: ${answerFalse}`);
} else if (gender === false && age >= 58) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${daysAge}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${female}
    вы на пенсии: ${answerTrue}`);
} else if (gender === false && age <= 58) {
    alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${daysAge}
    через 5 лет вам будет: ${afterFiveYears}
    ваш пол: ${female}
    вы на пенсии: ${answerFalse}`);
};






