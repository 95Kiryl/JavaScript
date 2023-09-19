'use strict'

const tagH1 = document.querySelector('.h1');
const tagP = document.querySelector('.p');
const tagCreate = document.querySelector('.create');
const textOne = document.querySelector('.textone');
const textTwo = document.querySelector('.texttwo');
const output = document.querySelector('#output');
const textThree = document.querySelector('.textthree');
const textFour = document.querySelector('.textfour');
const textFive = document.querySelector('.textfive');


tagH1.addEventListener('click', () => {
    let firstText = textOne.value;
    let elem = document.createElement('h1');
    elem.textContent = firstText;
    output.append(elem);
})

tagP.addEventListener('click', () => {
    let secondText = textTwo.value;
    let elem = document.createElement('p');
    elem.textContent = secondText;
    output.append(elem);
})

tagCreate.addEventListener('click', () => {
    let textLiOne = textThree.value;
    let textLiTwo = textFour.value;
    let textLiThree = textFive.value;
    let elem = `
        <ul>
            <li>${textLiOne}</li>
            <li>${textLiTwo}</li>
            <li>${textLiThree}</li>
        </ul>
    `;
    output.insertAdjacentHTML('beforeend', elem);
})




