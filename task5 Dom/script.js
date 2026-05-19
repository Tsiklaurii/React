// 1 --------------------------------------------------------------------------
const div = document.createElement("div");
const divText = document.createTextNode("Some random text for div");

const button = document.createElement("button");
const buttonText = document.createTextNode("Click me");

div.setAttribute("id", "div1");
button.setAttribute("id", "btn1");

div.append(divText);
button.append(buttonText);
document.body.append(div, button);

btn1.addEventListener("click", () => {
    div.style.display = "none";
});

// // 2 --------------------------------------------------------------------------
const div2El = document.createElement("div");
div2El.setAttribute("id", "card");
const h2El = document.createElement("h2");
const h2ElText = document.createTextNode("Gandalf");
h2El.append(h2ElText);

const aEl = document.createElement("a");
aEl.setAttribute("href", "#");
const aElText = document.createTextNode("Go to profile");
aEl.append(aElText);

div2El.append(h2El, aEl);
document.body.append(div2El);

// 3 --------------------------------------------------------------------------
const questions = [
    {
        question: "რომელია JavaScript-ის ტიპი?",
        answers: ["String", "Header", "Footer"],
        correct: "String",
    },
    {
        question: "რომელი მეთოდი ამატებს ელემენტს მასივში?",
        answers: ["push()", "pop()", "shift()"],
        correct: "push()",
    },
    {
        question: "რომელი keyword ქმნის ცვლადს?",
        answers: ["let", "loop", "return"],
        correct: "let",
    },
];

const app = document.createElement("div");
document.body.appendChild(app);

questions.forEach((item) => {
    const questionTitle = document.createElement("h3");
    questionTitle.textContent = item.question;
    app.appendChild(questionTitle);

    item.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.style.display = "block";
        button.style.margin = "5px 0";
        button.style.padding = "10px";

        button.addEventListener("click", () => {
            if (answer === item.correct) {
                button.style.backgroundColor = "green";
                button.style.color = "white";
            } else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }
        });
        app.appendChild(button);
    });
});
