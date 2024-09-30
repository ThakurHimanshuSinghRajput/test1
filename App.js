let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msgwin = document.querySelector("#msg");
let UserScore = document.querySelector("#user-score");
let CompScore = document.querySelector("#comp-score");

//Generate Computer Choice
let gencompchoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 2);
    return options[randIdx];
}
//Draw Game
let drawGame = () => {
    console.log("Game was Draw. Play again");
    msgwin.innerText = "Game was Draw. Play again!";
    msgwin.style.backgroundColor = "brown";
}
//showWinner
let showWinner = (userWin, userChoice, compchoice) => {
    if (userWin) {
        userscore++;
        UserScore.innerText = userscore;
        msgwin.innerText = `You Won! Your ${userChoice} beats ${compchoice}`;
        msgwin.style.backgroundColor = "green";
    } else {
        compscore++;
        CompScore.innerText = compscore;
        msgwin.innerText = "You Lose!";
        msgwin.innerText = `You Won! ${compchoice} beats your ${userChoice}`;
        msgwin.style.backgroundColor = "red";
    }

}
//PlayGame 
let playgame = (userChoice) => {
    console.log("User Choice=", userChoice);
    //Generate computer choice
    let compchoice = gencompchoice();
    console.log("Comp Choice=", compchoice);

    if (userChoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor paper
            userWin = compchoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            //rock scissor
            userWin = compchoice === "rock" ? true : false;
        } else {
            //userchoice - scissor
            //compchoice - paper scissor
            userWin = compchoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compchoice);
    }
};
//UserChoice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});