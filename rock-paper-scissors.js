let userChoice = prompt("Rock, Paper, or Scissors?");
let computerChoice = Math.floor(Math.random() * 3);

const choiceToNum = (userString) => {
    if (userString === 'Rock'){
        userNum = 0;
    }else if (userString === 'Paper') {
        userNum = 1;
    }else if (userString === 'Scissors'){
        userNum = 2;
    }else{
        console.log ('Please enter "Rock" "Paper" or "Scissors:');
    }
    return userNum;
}

const winner = (user, computer) => {
    if (user === computer){
        result = "It's a tie!";
    }else if (user === 0 && computer === 1){
        result = "You Lose";
    }else if (user === 0 && computer === 2){
        result = "You Win";
    }else if (user === 1 && computer === 0){
        result = "You Win";
    }else if (user === 1 && computer === 2){
        result = "You Lose";
    }else if (user === 2 && computer === 0){
        result = "You Lose";
    }else if (user === 2 && computer === 1){
        result ="You Win";
    }
    return result;
}
console.log (computerChoice);
choiceToNum (userChoice);
winner (userNum, computerChoice);
console.log (result);
document.getElementById('result').innerText = result;