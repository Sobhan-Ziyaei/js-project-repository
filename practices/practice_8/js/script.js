let numberCount = prompt('How many numbers do you want to average of theme ?');

let sum = 0
for (let i = 0; i < numberCount; i++) {
    let number = prompt(`Enter a number ${i+1}`);
    if (isNaN(number)) {
        alert('Please enter a valid number');
        i--;
    }
    else {
        sum += parseInt(number);
    }
}

let average = sum / numberCount;
alert(`The average of the numbers is ${average}`);