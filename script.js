// const str = "Re:educate";
// console.log(str.split(":"));

// let num = -5;
// let result = num > 0 ? "positive" : num < 0 ? "Negative" : "zero";
// console.log(result);

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log("sum:", sum);


// let tasks = ["task 1", "task 2", "task 3", "task 4", "task 5"];
// console.log(tasks);

// console.log(tasks[3]);

// tasks.push("new task 6", "new task 7");
// console.log(tasks);

// let lastTask = tasks.pop();
// console.log(lastTask)



// let toDoList = [];
// toDoList.push("task 1", "task 2", "task 3");
// toDoList.unshift("urgent task");
// toDoList.pop();
// console.log(toDoList);


// let waitingWueue = ["person 1", "person 2", "person 3"];
// waitingWueue.push("person 4", "person 5");
// waitingWueue.shift()
// console.log(waitingWueue);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const double = numbers.map(num => num * 2);
// console.log(numbers);
// console.log(double);


// const users = [
//     { name: "name", age: 12 },
//     { name: "name2", age: 13 },
//     { name: "name3", age: 14 }
// ]
// const names = users.map(user => user.name);

// const filtered = numbers.filter(num => num > 7);
// console.log(filtered);

// const filtered2 = users.filter(user => user.age >= 13);
// console.log(filtered2);

// const reduced = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(reduced)

// const a = true;
// const b = false;

// const result = a || b;



const numbers = [3, 7, 12, 5, 8];

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

function checkNumbers(num) {
    if (num > 10 && num % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(checkNumbers(12));