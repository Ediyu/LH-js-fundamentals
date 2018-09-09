function howManyHundreds(num) {
    return (num/100) - ((num%100)/100);
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(520));
console.log(howManyHundreds(0));
console.log(howManyHundreds(999));
