// 1 --------------------------------------------------------------------------
function replaceValue(string, valueToReplace, valueToReplaceWith) {
    let result = "";
    for (const char of string) {
        if (char === valueToReplace) {
            result += valueToReplaceWith;
        } else {
            result += char;
        }
    }
    return result;
}
console.log(replaceValue("strinhg", "h", ""));

// 2 --------------------------------------------------------------------------
function capital(sentence) {
    return sentence
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(
    capital(
        "The function converts the first character into an uppercase letter."
    )
);

// 3 --------------------------------------------------------------------------
users = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 },
];
function sortedArray(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
console.log(sortedArray(users));
