let h3Elem = document.querySelector('h3');
let btn = document.querySelector('button');

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000;
}

btn.addEventListener('click', () => {
    let randomNum = generateRandomNumber();
    h3Elem.textContent = randomNum;
});
