let userScore = 0 ;
let computerScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetBtn = document.querySelector("#rst");
resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = computerScore;
    msg.innerText = "Game Reset, play again";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
   
});

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWins, userChoice, compChoice) => {
    if(userWins) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You Won!.Your ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "#b2ff00";
        msg.style.color = "black";
        
        
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerHTML = `You Lost!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    
    const compChoice = getCompChoice();
   

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWins = true;
        if(userChoice === "rock") {
            //paper, scissors
            userWins = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWins = compChoice === "scissors" ? false : true;

        } else {
            //rock,paper
            userWins = compChoice === "rock" ? false : true;
        }
        showWinner(userWins, userChoice, compChoice);
    } 

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
       const userChoice =choice.getAttribute("id"); 
    //    console.log("clicked", choiceId);
       playGame(userChoice);
    });
});