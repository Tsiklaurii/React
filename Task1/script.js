const fruits = "Apple, Banana, Grape, Mango, Orange";

console.log("1. length:", fruits.length);
console.log("2. uppercase:", fruits.toUpperCase());
console.log("3. lowercase:", fruits.toLowerCase());
console.log("4. array of fruits:", fruits.split(","));
console.log("5. replace:", fruits.replace("Banana", "Strawberry"))

let result = fruits.includes("Grape") ? "Grape is in the list" : "Grape is not in the list";
console.log("6.", result);

console.log("7.", fruits.repeat(2));
