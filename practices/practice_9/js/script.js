let number = prompt('Enter a number');

let numbers = number.split('');
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    let num = parseInt(numbers[i]);
    if (isNaN(num)) {
        alert('Please enter a valid number');
        i--;
    }
    else {
        sum += num;
    }

}

alert(`The sum of the numbers is ${sum}`);