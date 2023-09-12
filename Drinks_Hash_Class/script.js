'use strict'

class HashStorageClass {
    constructor() {
        this.result = null;
        this.obj = {};
    }

    addValue = (key, value) => {
        this.key = key;
        this.value = value;
        this.obj[this.key] = value;
    }

    getValue = (key) => {
        if (this.obj.hasOwnProperty(key)) {
            this.result = this.obj[key];
            return this.result;
        } else {
            return this.result = undefined;
        }
    }

    deleteValue = (key) => {
        if (this.obj.hasOwnProperty(key)) {
            delete this.obj[key];
            return this.result = true;
        } else {
            return this.result = false;
        }
    }

    getKeys = () => {
        return alert(Object.keys(this.obj));
    }
}

let drinkStorage = new HashStorageClass();

const btn = document.querySelectorAll('button');
const parent = document.querySelector('#info');

parent.addEventListener('click', (event) => {
    if (event.target === btn[0]) {
        const name = prompt('Введите название напитка', '');
        const recipe = prompt('Напишите рецепт приготовления', '');
        drinkStorage.addValue(name, recipe);
    } else if (event.target === btn[1]) {
        const name = prompt('Введите название напитка', '');
        drinkStorage.getValue(name);
        drinkStorage.result === undefined ? alert('Такого напитка нет в базе') : alert(drinkStorage.result);
    } else if (event.target === btn[2]) {
        const name = prompt('Введите название напитка', '');
        drinkStorage.deleteValue(name);
        drinkStorage.result === true ? alert('Напиток удален') : alert('Такого напитка нет');
    } else if (event.target === btn[3]) {
        drinkStorage.getKeys();
    }
})


