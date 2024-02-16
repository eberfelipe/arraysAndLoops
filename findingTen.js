const numbers = [];
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 11);
    numbers.push(number);
}

console.log(numbers);

let foundIndex = -1;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    console.log(foundIndex);
} else {
    console.log(-1);
}
