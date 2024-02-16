function findIndexofArray() {
    const bolArray = Array.from({ length: 10 }, () => Math.random() > 0.5);
    console.log("Initial array:", bolArray);
    const indexOfArray = [];
    bolArray.forEach((value, index) => {
        if (value) indexOfArray.push(index);
    });
    console.log("Index of true values:", indexOfArray);
}

findIndexofArray();