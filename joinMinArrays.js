function joinMinArrays(maxlength) {
    const arr1 = Array.from({ length: maxlength }, () => Math.floor(Math.random() * 100));
    const arr2 = Array.from({ length: maxlength }, () => Math.floor(Math.random() * 100));
    console.log("First array:", arr1);
    console.log("Second array:", arr2);
    const joinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const filteredArray = joinedArray.slice(0, maxlength);
    console.log("Joined array:", filteredArray);
    return filteredArray;
}

joinMinArrays(3);
