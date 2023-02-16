const winner = (userChoice) => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (userChoice === computerChoice){
        result = "It's a tie!";
    }else if (userChoice === 0 && computerChoice === 1){
        result = "You Lose";
    }else if (userChoice === 0 && computerChoice === 2){
        result = "You Win";
    }else if (userChoice === 1 && computerChoice === 0){
        result = "You Win";
    }else if (userChoice === 1 && computerChoice === 2){
        result = "You Lose";
    }else if (userChoice === 2 && computerChoice === 0){
        result = "You Lose";
    }else if (userChoice === 2 && computerChoice === 1){
        result ="You Win";
    }
    document.getElementById('result').innerText = result;
    return result;
}

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', winner(0));
const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', winner(1));
const scissorsButton = document.getElementById('paper');
scissorsButton.addEventListener('click', winner(2));
