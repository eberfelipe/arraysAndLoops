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
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const sumOfEvenNumbers = evenNumbers.reduce((acc, number) => acc + number, 0);
    return sumOfEvenNumbers;
}

const numbers = fillArrayWithRandomNumbers(10, 0, 10);
console.log('Original array with random numbers:', numbers);

const evens = onlyEven(numbers);
console.log('Sum of array with only even numbers:', evens);
