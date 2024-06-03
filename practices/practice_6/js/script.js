let firstNumInput = document.querySelector('#first-num');
let secondNumInput = document.querySelector('#second-num');
let btn = document.querySelector('button');
let ulElem = document.querySelector('ul');

const generateEvenNumbers = () => {
    ulElem.innerHTML = '';
    let firstNum = parseInt(firstNumInput.value);
    let secondNum = parseInt(secondNumInput.value);

    if (!firstNumInput.value|| !secondNumInput.value ) {
        alert('Please enter a number');
    }

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 2 === 0) {
            ulElem.appendChild(document.createElement('li')).textContent = i;
        }
    }

}

btn.addEventListener('click', generateEvenNumbers)