function queueControl() {
    let maxInsideQueue = 5;
    let insideQueue = Array.from({ length: Math.floor(Math.random() * maxInsideQueue) + 1 }, () => Math.floor(Math.random() * 10));
    console.log("Initial inside queue:", insideQueue);

    let outsideQueue = Array.from({ length: Math.floor(Math.random() * maxInsideQueue) + 1 }, () => Math.floor(Math.random() * 10));
    console.log("Initial outside queue:", outsideQueue);

    if (insideQueue.length < maxInsideQueue) {
        let vacancies = maxInsideQueue - insideQueue.length;
        while (vacancies > 0 && outsideQueue.length > 0) {
            insideQueue.push(outsideQueue.shift());
            vacancies--;
        }
    }

    console.log("Final inside queue:", insideQueue);
    console.log("Final outside queue:", outsideQueue);
}

queueControl();
