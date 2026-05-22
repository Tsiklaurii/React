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

    const input = document.querySelector('input[name="color"]');
    const inputValue = input.value;

    const colors = ["red", "blue", "green", "black", "white"];

    if (!inputValue) {
        alert("Please input color");
        input.value = "";
    } else if (!colors.includes(inputValue)) {
        alert("Please enter: red, blue, green, black or white");
        input.value = "";
    } else {
        root.style.backgroundColor = inputValue;
        input.value = "";
    }
});

// 3 --------------------------------------------------------------------------
const numberForm = document.querySelector(".numberForm");
numberForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector('input[name="numbers"]');
    const inputValue = input.value;

    if (!inputValue) {
        alert("Please enter numbers");
        input.value = "";
    } else {
        const numbers = inputValue.split(":").map((num) => Number(num));
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        alert(`Average of ${inputValue} is: ${average}`);
        input.value = "";
    }
});
