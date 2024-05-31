let countNumber = prompt("How mane do you have: ");

let sum = 0 ;
for (let i = 0; i < countNumber; i++) {
    let number = prompt("Enter a number: ");
    sum += parseInt(number); 
}

let average = sum / countNumber;
alert(`The average is ${average}`);