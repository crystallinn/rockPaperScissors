const winner = (userChoice) => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (userChoice === computerChoice){
        result = "It's a tie!";
    }else if (userChoice === 0 && computer === 1){
        result = "You Lose";
    }else if (userChoice === 0 && computer === 2){
        result = "You Win";
    }else if (userChoice === 1 && computer === 0){
        result = "You Win";
    }else if (userChoice === 1 && computer === 2){
        result = "You Lose";
    }else if (userChoice === 2 && computer === 0){
        result = "You Lose";
    }else if (userChoice === 2 && computer === 1){
        result ="You Win";
    }
    document.getElementById('result').innerText = result;
    return result;
}

document.getElementById('rock').addEventListener('click', winner(0));
document.getElementById('rock').addEventListener('click', winner(1));
document.getElementById('rock').addEventListener('click', winner(2));