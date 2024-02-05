window.addEventListener('load', () => {
    // Array with game options//
    const choices = ["rock", "paper", "scissors"];

    //varables to keep track of scores
    let userScore = 0;
    let compScore = 0;

    // added event listeners to all buttons and adds the handle choice functions to it //
    const buttons = document.querySelectorAll(".choiceBtn")
    buttons.forEach(button => button.addEventListener("click", handleChoice));

    // event listener for start game button
    document.querySelector(".startBtn").addEventListener("click", clickedStart);

    function clickedStart() {
        let home = document.querySelector("#homePage");
        let play = document.querySelector("#gameScreen");

        home.style.display = "none";
        play.style.display = "block";
    }

    document.querySelector(".finishBtn").addEventListener("click", clickedFinish);

    function clickedFinish() {
        let play = document.querySelector("#gameScreen");
        let finish = document.querySelector("#endScreen");

        play.style.display = "none";
        finish.style.display = "block";
    }

    document.querySelector(".resetBtn").addEventListener("click", clickedReset);

    function clickedReset() {
        let finish = document.querySelector("#endScreen");
        let home = document.querySelector("#homePage");

        finish.style.display = "none";
        home.style.display = "block";
        userScore = 0;
        compScore = 0;

    }

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
                rock: ["scissors"],
                paper: ["rock"],
                scissors: ["paper"]
            }
            //check if user has won and update HTML 
            if (winConditions[userChoice].includes(computerChoice)) {
                document.getElementById("resultDisplay").textContent = "You Win👍";
                userScore++;
            } else if (computerChoice === userChoice) {
                document.getElementById("resultDisplay").textContent = "It's a tie👔";
            } else {
                document.getElementById("resultDisplay").textContent = "Computer Win👎";
                compScore++;
            }

            //update scoreboard
            document.getElementById("userScore").textContent = `User Score: ${userScore}`;
            document.getElementById("compScore").textContent = `Comp Score: ${compScore}`;

        }
    }
});