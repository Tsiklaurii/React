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



// const numbers = [3, 7, 12, 5, 8];

// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// function checkNumbers(num) {
//     if (num > 10 && num % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkNumbers(12));



// const book = {
//     name: "The Goat's Feast",
//     author: "Mario Vargas Llosa",
//     language: "Spanish",
//     country: "Peru",
//     year: 1980
// }

// const book2 = {
//     name: "1984",
//     author: "George Orwell",
//     language: "English",
//     country: "UK",
//     year: 1950
// }

// console.log("name:", book.name);
// console.log("author:", book.author);
// console.log("language:", book.language);
// console.log("country:", book.country);
// console.log("year:", book.year);

// console.log(book2["name"]);
// console.log(book2["author"]);
// console.log(book2["language"]);
// console.log(book2["country"]);
// console.log(book2["year"]);

// const keys = Object.keys(book);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     console.log(key + ": " + book[key]);
// }

// for (const key in book2) {
//     console.log(key + ": " + book2[key]);
// }



// const company = {
//     name: "TechStars Inc.",
//     location: "New York",
//     departments: {
//         engineering: {
//             manager: "Alice Johnson",
//             teams: {
//                 frontend: {
//                     lead: "John Doe",
//                     members: ["Emma", "Liam", "Olivia"]
//                 },
//                 backend: {
//                     lead: "Michael Smith",
//                     members: ["Noah", "Ava", "Sophia"]
//                 }
//             }
//         },
//         marketing: {
//             manager: "Sarah Brown",
//             teams: {
//                 seo: {
//                     lead: "David Lee",
//                     members: ["Mia", "Ethan", "Isabella"]
//                 },
//                 content: {
//                     lead: "Sophia Davis",
//                     members: ["Lucas", "Charlotte", "Amelia"]
//                 }
//             }
//         },
//         sales: {
//             manager: "Robert Wilson",
//             teams: {
//                 domestic: {
//                     lead: "James Miller",
//                     members: ["Benjamin", "Harper", "Evelyn"]
//                 },
//                 international: {
//                     lead: "Elizabeth Taylor",
//                     members: ["Alexander", "Ella", "Henry"]
//                 }
//             }
//         }
//     }
// };

// for (let dep in company.departments) {
//     console.log(dep);
// }

// for (let dep in company.departments) {
//     let teams = company.departments[dep].teams;
//     for (let team in teams) {
//         console.log(teams[team].lead)
//     }
// }

// let backMem = company.departments.engineering.teams.backend.members;
// for (i = 0; i < backMem.length; i++) {
//     console.log("backend members:", backMem[i]);
// }
// for (let i of backMem) {
//     console.log(i);
// }

// for (let dep in company.departments) {
//     let teams = company.departments[dep].teams;
//     for (let team in teams) {
//         let members = teams[team].members
//         for (i = 0; i < members.length; i++) {
//             console.log("members:", members[i]);
//         }
//     }
// }





// setTimeout(() => {
//     console.log("time's up");
// }, 5000);

// setTimeout(() => {
//     const body = document.querySelector("body");
//     body.style.backgroundColor = "black";
// }, 5000);



// let counter = 0;
// let intervalId = setInterval(() => {
//     counter++;
//     console.log(counter, "hello");

//     if (counter == 5) {
//         clearInterval(intervalId);
//         console.log("goodbye");
//     }
// }, 1000)




// function getNumbers() {
//     return new Promise(resolve => {
//         setTimeout(() => { resolve(42) }, 2000)
//     })
// }
// // console.log(getNumbers());

// async function showNumbers() {
//     const numbersArray = await getNumbers();
//     console.log(numbersArray);
// }
// // console.log(showNumbers());

// console.log(getNumbers());



// async function doubleWait() {
//     const firstTalk = await new Promise(resolve => setTimeout(resolve("First talk"), 2000))
//     console.log(firstTalk)

//     const secondTalk = await new Promise(resolve => setTimeout(resolve("Second talk"), 4000))
//     console.log(secondTalk)
// }
// doubleWait()



// function first(ms, val) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(val), ms);
//     });
// }

// async function smth() {
//     const result1 = await first(1000, "first");
//     console.log(result1);

//     const result2 = await first(2000, "second");
//     console.log(result2);
// }

// smth();


//////////////////////////////////////////////////////////////////////////////////////////


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("response was not ok");
//         }
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         data.forEach(user => console.log(user.name))
//     })
//     .catch((err) => console.log(err))


// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();


// import axios from "axios"


// async function getPost() {
//     try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//         console.log("this is data", res.data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPost();


// const API_URL = "https://jsonplaceholder.typicode.com/";

// async function createPost() {
//     try {
//         const res = await axios.put(API_URL + "/posts/1", { title: "My Post", body: "This is my last post ", userId: 1 });
//         console.log("This is my data :", res.data)
//     } catch (error) {
//         console.log("This is my error :", error)
//     }
// }
// createPost();


// const pattern = /^A/
// const pattern2 = /\d/
// const pattern3 = /Z$/



// const phone = /^\d{2}-\d{2}-\d{3}-\d{2}-\d{2}$/
// const num = "41-79-123-45-67"

// // console.log(phone.test(num));

// const nameCheck = /^[A-Za-z]+$/
// const username = 'saxeli'
// console.log(nameCheck.test(username));

// const emailCheck = /^[A-Za-z0-9]+@gmail\.com$/
// const email = "user@gmail.com"
// console.log(emailCheck.test(email));

// const passCheck = /^[A-Za-z0-9]+/
// const pass = "Pass1234!"

// const pass2 = "12345"





const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        const res = await axios.get(API_URL);
        users = res.data;

        const longNamedUsers = users.filter(user => user.name.length > 6);
        console.log(longNamedUsers);

        const websites = users.filter(user => user.website.endsWith(".org"));
        console.log(websites);

        const zip = users.filter(user => user.address.zipcode.includes("0"));
        console.log(zip);

    } catch (error) {
        console.log(error);
    }
}
getUsers();