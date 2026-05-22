const root = document.body;

// 1 --------------------------------------------------------------------------
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

// 2 --------------------------------------------------------------------------
const colorForm = document.querySelector(".colorForm");
colorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = document.querySelector('input[name="color"]').value;
    const colors = ["red", "blue", "green", "black", "white"];

    if (!inputValue) {
        alert("Please input color");
    } else if (!colors.includes(inputValue)) {
        alert("Please enter: red, blue, green, black or white");
    } else {
        root.style.backgroundColor = inputValue;
    }
});

// 3 --------------------------------------------------------------------------
const numberForm = document.querySelector(".numberForm");
numberForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = document.querySelector('input[name="numbers"]').value;
    if (!inputValue) {
        alert("Please enter numbers");
    } else {
        const numbers = inputValue.split(":").map((num) => Number(num));
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        alert(`Average of ${inputValue} is: ${average}`);
    }
});
