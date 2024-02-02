// Array with game options//
const choices = ["rock", "paper", "scissors"];

// added event listeners to all buttons and adds the handle choice functions to it //
const buttons = document.querySelectorAll("button")
buttons.forEach(button => button.addEventListener("click", handleChoice));

function handleChoice(e) {
    //grabs userchoice// 
    let userChoice = e.target.id;
    //generates computer choice// 
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // updated the choices in HTML 
    document.getElementById("playerDisplay").textContent = `Player: ${userChoice}`;
    document.getElementById("computerDisplay").textContent = `Computer: ${computerChoice}`;
    //determine results
    const result = determineWinner(userChoice, computerChoice);


    function determineWinner(userChoice, computerChoice) {
        const winConditions = {
            rock: ["scissors", "lizard"],
            paper: ["rock", "spock"],
            scissors: ["paper", "lizard"],
            lizard: ["spock", "paper"],
            spock: ["rock", "scissors"]
        }
        //check if user has won and update HTML 
        if (winConditions[userChoice].includes(computerChoice)) {
            document.getElementById("resultDisplay").textContent = "You Win👍";
        } else if (computerChoice === userChoice) {
            document.getElementById("resultDisplay").textContent = "It's a tie👔";
        } else {
            document.getElementById("resultDisplay").textContent = "Computer Win👎";
        }
    }
}