let productCount = prompt('How many products do you want to add?');

let sum = 0;
for (let i = 0; i < productCount; i++) {
    let productPrice = prompt(`Enter the price of the product ${i+1}`);
    sum += parseFloat(productPrice);
}

alert('The total price of the products is ' + sum);