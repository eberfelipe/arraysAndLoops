function differenceMinAndMax() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    console.log(numbers);
    return Math.max(...numbers) - Math.min(...numbers);
}

console.log(differenceMinAndMax());
