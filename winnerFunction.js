const winner = (userChoice) => {
    let computerChoice = Math.floor(Math.random() * 3);
        // if it is a tie
    if (userChoice === 0 && computerChoice === 0){
        result = "You and the computer both chose rock. It's a tie!";
    }else if (userChoice === 1 && computerChoice === 1){
            result = "You and the computer both chose paper. It's a tie!";
    }else if (userChoice === 2 && computerChoice === 2){
            result = "You and the computer both chose scissors. It's a tie!";
        // if it is not a tie and the user clicks rock
    }else if (userChoice === 0 && computerChoice === 1){
        result = "You chose rock and the compputer chose paper. You lost.";
    }else if (userChoice === 0 && computerChoice === 2){
        result = "You chose rock and the computer chose scissors. You won!";
        // if it is not a tie and the user clicks paper
    }else if (userChoice === 1 && computerChoice === 0){
        result = "You chose paper and the computer chose rock. You won!";
    }else if (userChoice === 1 && computerChoice === 2){
        result = "You chose paper and the computer chose scissors. You lost.";
        // if it is not a tie and the user clicks scissors
    }else if (userChoice === 2 && computerChoice === 0){
        result = "You chose scissors and the computer chose rock You lost.";
    }else if (userChoice === 2 && computerChoice === 1){
        result = "You chose scissors and the computer chose paper. You won!";
    }
    else {
        result = "Something went wrong."
    }
    document.getElementById('result').innerText = result;
    return result;
}