let numerosAleatorios = [];

for (let i = 0; i < 5; i++) {
    numerosAleatorios.push((Math.random() * 100).toFixed(0));
}

function biggerNumber(numbers) {
    return Math.max.apply(null, numbers);
}

console.log(numerosAleatorios);
console.log(biggerNumber(numerosAleatorios));