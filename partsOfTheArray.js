function partofArray() {
    let arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 200));
    console.log(arr);

    let newarr = arr.filter(value => (value >= 10 && value <= 20) || value > 100);

    return newarr;
}

console.log(partofArray());
