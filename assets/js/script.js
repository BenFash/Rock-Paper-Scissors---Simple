// Array with game options//
const choices = ["rock", "paper", "scissors"];

const resultDisplay = document.getElementById("resultDisplay");
// added event listeners to all buttons and adds the handle choice functions to it //
const buttons = document.querySelectorAll("button")
buttons.forEach(button => button.addEventListener("click, handleChoice"));

function handleChoice(e) {
    const userChoice = e.target.button;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerDisplay").textContent = `Player: ${userChoice}`;
    document.getElementById("computerDisplay").textContent = `Computer: ${computerChoice}`;
}