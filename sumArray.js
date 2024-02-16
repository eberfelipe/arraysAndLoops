const number = [];
const index = 5;

for (let i = 0; i < index; i++) {
    let aleatory = Math.floor(Math.random() * 10);
    let resultado = (aleatory + index + i) * 2 - 3;
    number.push(resultado);
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(number);
console.log(sumArray(number));



