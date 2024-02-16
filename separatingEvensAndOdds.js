function separatingEvensAndOdds(maxlength) {
    const arr = Array.from({ length: maxlength }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
    console.log("Array:", arr);
    const evens = arr.filter((num) => num % 2 === 0);
    const odds = arr.filter((num) => num % 2 !== 0);
    console.log("Evens:", evens);
    console.log("Odds:", odds);
    return [evens, odds];
}

separatingEvensAndOdds(5);