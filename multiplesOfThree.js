const multiplesOfThree = [];
for (let i = 1; i <= 500; i++) {
    if (i % 3 === 0) {
        multiplesOfThree.push(i);
    }
}

console.log(multiplesOfThree);