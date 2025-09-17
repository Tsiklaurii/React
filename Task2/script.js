// Part 1: Setup
let basketString = "Apple, Banana, Grape, Mango, Orange";
let arrayOfFruits = basketString.split(", ");
console.log(arrayOfFruits);


// Part 2: String Operations
console.log("length:", basketString.length);

let uppercase = basketString.toUpperCase();
console.log("Uppercase:", uppercase);

let lowercase = basketString.toLowerCase();
console.log("Lowercase:", lowercase);

console.log("replace:", basketString.replace("Banana", "Strawberry"));

if (basketString.startsWith("Apple") && basketString.endsWith("Orange")) {
    console.log("string starts with 'Apple' and ends with 'Orange'");
}

let newFruitString = "";
for (let i = 0; i < arrayOfFruits.length; i++) {
    newFruitString += arrayOfFruits[i];
    if (i < arrayOfFruits.length - 1) {
        newFruitString += " | ";
    }
}
console.log(newFruitString);


// Part 3: Array Basket Operations
arrayOfFruits.push("Pineapple");
arrayOfFruits.pop();
arrayOfFruits.unshift("Watermelon");
arrayOfFruits.shift();
console.log(arrayOfFruits);


// Part 4: Searching & Checking
let result = arrayOfFruits.includes("Grape") ? "Grape is available" : "Grape is not available";
console.log(result);

console.log("position of 'Mango':", arrayOfFruits.indexOf("Mango"));

let result2 = arrayOfFruits.length > 5 ? "The basket is full" : "The basket has space";
console.log(result2);


// Part 5: Bonus Challenge
let fruitName = prompt("Enter fruit name");
if (arrayOfFruits.includes(fruitName)) {
    let index = arrayOfFruits.indexOf(fruitName);
    arrayOfFruits.splice(index, 1);
} else {
    arrayOfFruits.push(fruitName);
}
console.log(arrayOfFruits);

let reverseBasket = arrayOfFruits.reverse();
console.log("Reversed basket:", reverseBasket);

for (let i = 0; i < 2; i++) {
    console.log(arrayOfFruits.join(", "));
}

// -------------------------------------------------------------
let repeatedBasket = "";
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < arrayOfFruits.length; j++) {
        repeatedBasket += arrayOfFruits[j];
        if (!(i === 1 && j === arrayOfFruits.length - 1)) {
            repeatedBasket += ", "; // აქ ამას თუ ჩაამატებ , სტრინგში შეინახავს 
        }
    }
}
console.log("Basket repeated 2x:", repeatedBasket);