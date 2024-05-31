const isNumberOddOrEven = (number) => {

    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }

}

let number = prompt("Enter a number: ");
let result = alert(`The number is ${isNumberOddOrEven(number)}`);