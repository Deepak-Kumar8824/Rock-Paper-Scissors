let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock" , "paper", "scissors"];
    const randInx = Math.floor(Math.random()  * 3);
    return options[randInx];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You lose! ${CompChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice) =>{
    // console.log("uesr choice = ",userChoice);
    // Generate computer choice

    const CompChoice = genCompChoice();
    // console.log("comp choice = ",CompChoice);

    if(userChoice === CompChoice){
        // Draw Game 
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper 
            userWin = CompChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissors 
            userWin = CompChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, CompChoice);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", Userchoice);
        playGame(userChoice);
    });
});