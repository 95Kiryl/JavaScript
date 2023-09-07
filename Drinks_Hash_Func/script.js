'use strict'

function HashStorageFunc() {
    const self = this;
    self.result = null;
    self.obj = {};

    self.addValue = function (key, value) {
        self.key = key;
        self.value = value;
        self.obj[self.key] = value;
    }

    self.getValue = function (key) {
        if (self.obj.hasOwnProperty(key)) {
            self.result = self.obj[key];
            return self.result;
        } else {
            return self.result = undefined;
        }
    }

    self.deleteValue = function (key) {
        if (self.obj.hasOwnProperty(key)) {
            delete self.obj[key];
            return self.result = true;
        } else {
            return self.result = false;
        }
    }

    self.getKeys = function () {
        return alert(Object.keys(self.obj));
    }
}

let drinkStorage = new HashStorageFunc();

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


