const friends = [
    { "name": "Elene", "age": 18, "ticket": "A102" },
    { "name": "Luka", "age": 24, "ticket": "B304" },
    { "name": "Ana", "age": 22, "ticket": "C256" },
    { "name": "Dato", "age": 17, "ticket": "D411" },
    { "name": "Diana", "age": 23, "ticket": "E198" },
    { "name": "Saba", "age": 17, "ticket": "E198" },
    { "name": "Lali", "age": 23, "ticket": "" }
];

const sweetSnacks = ["Chocolate Bar", "Donut", "Cupcake", "Ice Cream"];

const saltySnacks = ["Chips", "Pretzels", "Popcorn", "Nachos"];

// Filter
const valid = friends.filter(friend => friend.age >= 18 && friend.ticket !== "");
console.log(valid);

// Map
const validNames = valid.map(friend => friend.name);
console.log(validNames);

// Reduce
const quantity = validNames.reduce((acc) => acc + 1, 0);
console.log(quantity);

// Concat
const snacks = sweetSnacks.concat(saltySnacks);
console.log(snacks);

// Final Output
const decision = quantity == 0 ? "Movie night is canceled!" : `We have ${quantity} friends coming: ${validNames}\nSnacks: ${snacks}`;
console.log(decision);