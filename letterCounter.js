let letters = ['A', 'B', 'e', 'C', 'D', 'E', 'f', 'e', 'G', 'h', 'E'];

function countLettersE(array) {
    let counter = 0;
    for (let letter of array) {
        if (letter === 'E' || letter === 'e') {
            counter++;
        }
    }
    return counter;
}

let quantityE = countLettersE(letters);

if (quantityE > 0) {
    console.log(`Wow! We found ${quantityE} letter(s) "E" or "e" in the array. How amazing!`);
} else {
    console.log(`Oops! It looks like we didn't find any 'E' or 'e' letters in the array. Better luck next time!`);
}
