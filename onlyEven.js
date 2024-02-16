function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillArrayWithRandomNumbers(size, min, max) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
        numbers.push(getRandomInt(min, max));
    }
    return numbers;
}

function onlyEven(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numbers = fillArrayWithRandomNumbers(10, 0, 10);
console.log('Original array with random numbers:', numbers);

const evens = onlyEven(numbers);
console.log('Filtered array with only even numbers:', evens);
