function generateOrderQueue() {
    let ordernumber = [];
    for (let i = 0; i < 5; i++) {
        ordernumber.push(i + 1);
    }
    ordernumber.sort((a, b) => a - b);
    let orderWithPrefix = ordernumber.map(order => "ORDER-" + order);
    return orderWithPrefix;
}

function updateOrderQueue(arrays) {
    arrays.shift();
    let lastOrder = arrays[arrays.length - 1];
    let lastOrderNumber = lastOrder.split("-")[1];
    let newOrderNumber = parseInt(lastOrderNumber) + 1;
    let newOrder = "ORDER-" + newOrderNumber;
    arrays.push(newOrder);
    return arrays;
}

console.log(generateOrderQueue());
console.log(updateOrderQueue(generateOrderQueue()));