const users = [
    { name: "Temo", age: 25 },
    { name: "Lasha", age: 21 },
    { name: "Ana", age: 28 },
];

function func1(arr) {
    let youngest = arr[0];
    for (let user of arr) {
        if (user.age < youngest.age) {
            youngest = user;
        }
    }
    return youngest.name;
}
console.log(func1(users));

// -------------------------------------------------------------
const user = { name: "Nino", country: "Georgia" };
function cloneUser(user) {
    const newUser = {};
    for (let key in user) {
        newUser[key] = user[key];
    }
    return newUser;
}
console.log(cloneUser(user));

// -------------------------------------------------------------
function roll() {
    return Math.floor(Math.random() * 6) + 1;
}
function game() {
    let first = 0;
    let second = 0;

    let firstGot3 = false;
    let secondGot3 = false;

    while (!firstGot3 || !secondGot3) {
        if (!firstGot3) {
            const firstRes = roll();
            first++;
            if (firstRes === 3) {
                firstGot3 = true;
            }
        }
        if (!secondGot3) {
            const secondRes = roll();
            second++;
            if (secondRes === 3) {
                secondGot3 = true;
            }
        }
    }
    if (first < second) {
        console.log("გამარჯვებულია User A");
    } else if (second < first) {
        console.log("გამარჯვებულია User B");
    } else {
        console.log("ფრე");
    }
}
game();
