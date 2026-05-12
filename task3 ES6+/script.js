// task 1 ------------------------------------------------------------------------
function task1(num1, num2, ...args) {
    const sum = num1 + num2;

    let product = 1;
    for (const num of args) {
        product *= num;
    }
    return [sum, product];
}
console.log(task1(1, 2, 3, 4, 5, 6));

// task 2 ------------------------------------------------------------------------
const user = {
    name: "Nino",
    banks: [
        {
            name: "TBC",
            address: {
                city: "Tbilisi",
            },
        },
        {
            name: "BOG",
            address: {
                city: "Kutaisi",
            },
        },
        {
            name: "Liberty",
            address: {
                city: "Batumi",
            },
        },
    ],
};
function task2(obj) {
    const {
        banks: [, , bank3],
    } = obj;
    const { address: { city } = {} } = bank3 || {};
    return city;
}
console.log(task2(user));

// task 3 ------------------------------------------------------------------------
function task3(obj) {
    const newObj = {};
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            newObj[key] = { ...obj[key] };
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
console.log(task3(user));
