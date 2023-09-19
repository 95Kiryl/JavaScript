'use strict'


const formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

const formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];


const createForm = (arr) => {
    const form = document.createElement('form');
    form.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
    form.setAttribute('method', 'POST');
    document.body.appendChild(form);
    let label;
    let input;
    let select;
    let option;
    let br;
    let textarea;
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (key === 'label') {
                label = document.createElement('label');
                label.textContent = arr[i][key];
                form.appendChild(label);
            } else if (key === 'kind') {
                if (arr[i][key] === 'combo') {
                    continue;
                } else if (arr[i][key] === 'check') {
                    input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    form.appendChild(input);
                } else if (arr[i][key] === 'memo') {
                    textarea = document.createElement('textarea');
                    form.appendChild(textarea);
                } else {
                    input = document.createElement('input');
                    input.setAttribute('type', arr[i][key]);
                    form.appendChild(input);
                }
            } else if (key === 'name') {
                input.setAttribute(key, arr[i][key]);
                br = document.createElement('br');
                form.appendChild(br);
            } else if (key === 'variants' & Array.isArray(arr[i][key])) {
                select = document.createElement('select');
                for (let j = 0; j < arr[i][key].length; j++) {
                    for (let k in arr[i][key][j]) {
                        if (k === 'text') {
                            option = document.createElement('option');
                            option.textContent = arr[i][key][j][k];
                        } else {
                            option.setAttribute(k, arr[i][key][j][k]);
                            select.appendChild(option);
                            form.appendChild(select);
                            form.appendChild(br);
                        }
                    }
                }
            }
        }
    }
}

console.log(createForm(formDef1));
console.log(createForm(formDef2));




