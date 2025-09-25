function downloadMovie1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Movie 1 downloaded")
        }, 1000);
    })
}

function downloadMovie2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Movie 2 downloaded")
        }, 2000);
    })
}

function downloadMovie3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Movie 3 downloaded")
        }, 3000);
    })
}


// Part A – Sequential
// Write an async function that downloads all three movies one by one (using await for each). Print the result of each movie as soon as it finishes.

async function downloadAll() {
    const result1 = await downloadMovie1();
    console.log(result1);

    const result2 = await downloadMovie2();
    console.log(result2);

    const result3 = await downloadMovie3();
    console.log(result3);
}
downloadAll();


// Part B – Parallel with Promise.all
// Write an async function that downloads all three movies at the same time. Use Promise.all and print the array of results.

async function promiseAllFunction() {
    await Promise.all([downloadMovie1(), downloadMovie2(), downloadMovie3()])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
promiseAllFunction();


// Part C – Fastest with Promise.race
// Write an async function that starts all three downloads. Use Promise.race to print which movie finishes first.

async function promiseRaceFunction() {
    await Promise.race([downloadMovie1(), downloadMovie2(), downloadMovie3()])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
promiseRaceFunction();