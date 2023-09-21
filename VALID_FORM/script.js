'use strict'

const form = document.forms.form,
    developers = document.querySelector('[name="developers"]'),
    name = document.querySelector('[name="name"]'),
    url = document.querySelector('[name="url"]'),
    data = document.querySelector('[name="data"]'),
    visitors = document.querySelector('[name="visitors"]'),
    mail = document.querySelector('[name="mail"]'),
    options = document.querySelectorAll('#options'),
    accommodation = document.querySelectorAll('[name="accommodation"]'),
    reviews = document.querySelector('[name="reviews"]'),
    description = document.querySelector('#description'),
    submit = document.querySelector('[name="submit"]'),
    wrapp = document.querySelector('.wrapp');



const addError = (event) => {
    const spanError = document.createElement('span');
    spanError.className = event.target.name;
    if (event.target.name === 'visitors') {
        spanError.textContent = 'Только числовые данные';
    } else if (event.target.name === 'data') {
        spanError.textContent = 'Укажите дату';
    } else {
        spanError.textContent = 'Длина строки должна быть от 1 до 50 символов';
    }
    spanError.style.color = 'red';
    event.target.insertAdjacentElement('afterend', spanError);
    event.target.style.borderColor = 'red';
    event.preventDefault();
    return;
}

const searchError = (event) => {
    const inputError = document.querySelectorAll('span');
    inputError.forEach(i => {
        if (i.className === event.target.name) {
            const eventError = i;
            removeError(event, eventError);
        }
    })
}

const removeError = (event, eventError) => {
    eventError.remove();
    event.target.style.borderColor = 'black';
}

const addErrorSubmit = (event, field) => {
    const submitError = document.createElement('span');
    if (field.className === 'accommodationField') {
        submitError.className = 'accommodation';
    } else {
        submitError.className = field.name;
    }
    submitError.textContent = ` ЗАПОЛНИТЕ ПОЛЕ`;
    submitError.style.color = 'red';
    field.insertAdjacentElement('afterend', submitError);
    field.style.borderColor = 'red';
    if (field.id === 'description') {
        description.focus();
        event.preventDefault();
        return;
    } else {
        const firstError = document.querySelectorAll('span');
        const spanName = firstError[0].className;
        const inputs = document.querySelectorAll('input');
        const arrayInputs = Array.from(inputs);
        const firstErrorInput = arrayInputs.filter(i => i.name === spanName);
        firstErrorInput[0].focus();
        event.preventDefault();
        return;
    }
}

developers.addEventListener('blur', (event) => {
    if (developers.value.length <= 0 || developers.value.length > 50) {
        addError(event);
    } else if (document.querySelectorAll('span')) {
        searchError(event);
    }
})

name.addEventListener('blur', (event) => {
    if (name.value.length <= 0 || name.value.length > 50) {
        addError(event);
    } else if (document.querySelector('span')) {
        searchError(event);
    }
})

url.addEventListener('blur', (event) => {
    if (url.value.length <= 0 || url.value.length > 50) {
        addError(event);
    } else if (document.querySelector('span')) {
        searchError(event);
    }
})

data.addEventListener('blur', (event) => {
    if (data.value === '') {
        addError(event);
    } else if (document.querySelector('span')) {
        searchError(event);
    }
})

visitors.addEventListener('blur', (event) => {
    if (isNaN(visitors.value) || visitors.value === '') {
        addError(event);
    } else if (document.querySelector('span')) {
        searchError(event);
    }
})

mail.addEventListener('blur', (event) => {
    if (mail.value.length <= 0 || mail.value.length > 50) {
        addError(event);
    } else if (document.querySelector('span')) {
        searchError(event);
    }
})

wrapp.addEventListener('click', (event) => {
    accommodation.forEach(i => {
        if (i.checked === true) {
            searchError(event);
        }
    })
})

description.addEventListener('blur', (event) => {
    if (description.value.length <= 0 || description.value.length > 50) {
        addError(event);
    } else if (document.querySelector('span')) {
        searchError(event);
    }
})

form.addEventListener('submit', (event) => {
    if (developers.value.length <= 0 || developers.value.length > 50) {
        addErrorSubmit(event, developers);
    }
    if (name.value.length <= 0 || name.value.length > 50) {
        addErrorSubmit(event, name);
    }
    if (url.value.length <= 0 || url.value.length > 50) {
        addErrorSubmit(event, url);
    }
    if (data.value === '') {
        addErrorSubmit(event, data);
    }
    if (isNaN(visitors.value) || visitors.value === '') {
        addErrorSubmit(event, visitors);
    }
    if (mail.value.length <= 0 || mail.value.length > 50) {
        addErrorSubmit(event, mail);
    }

    let accommodationFalse = 0;
    let accommodationTrue = 0;
    accommodation.forEach(i => {
        if (i.checked === false) {
            accommodationFalse += 1;
        } else {
            accommodationTrue += 1;
        }
    })
    if (accommodationTrue <= 0) {
        const accommodationField = document.querySelector('.accommodationField');
        addErrorSubmit(event, accommodationField);
    }




    if (description.value.length <= 0 || description.value.length > 50) {
        addErrorSubmit(event, description);
    }
})




