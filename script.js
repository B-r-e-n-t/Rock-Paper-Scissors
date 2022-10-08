
        const playerScore = document.getElementById('player-score');
        const computerScore = document.getElementById('computer-score');
        const results = document.getElementById('results');
        const rockButton = document.getElementById('rockbutton');
        const paperButton = document.getElementById('paperbutton');
        const scissorsButton = document.getElementById('scissorsbutton');

const score = {
    player: 0,
    computer: 0,
};
function computerPlay () {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  };
}

function playRound (playerselection, computerselection) {
    if (playerselection==='paper'){
        if (computerselection==='rock'){
            return 'You win! Paper beats rock.'
        }
        if (computerselection==='scissors'){
            return 'You lose! Scissors beat paper'
        }
        if (computerselection==='paper'){
            return 'You tie! Apple Sauce also chose paper'
        }
    }

    if (playerselection==='rock'){
        if (computerselection==='rock'){
            return 'You tie! Apple Sauce also chose rock'
        }
        if (computerselection==='scissors'){
            return 'You win! Rock beats scissors'
        }
        if (computerselection==='paper'){
            return 'You lose! Paper beats rock'
        }
    }

    if (playerselection==='scissors'){  
        if (computerselection==='rock'){
            return 'You lose! Rock beats scissors'
        }
        if (computerselection==='scissors'){
            return 'You tie! Apple Sauce also chose scissors'
        }
        if (computerselection==='paper'){
            return 'You win! Scissors beats paper'
        }
    }

}

function startRound (playerselection){
   const result=playRound(playerselection,computerPlay());
        if (result.includes('win') ) {
            score.player +=1
        }
        if (result.includes('lose') ) {
            score.computer +=1
        } 
        
        playerScore.innerText=score.player;
        computerScore.innerText=score.computer;
        results.innerText= isGameOver() ? isGameOver() : result;

    } 

    function disableBtn() {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            debugger;
        
}

    function isGameOver () {
        if (score.player===5) {
            disableBtn()
            return 'You win the game! Apple Sauce will leave your town!'
            debugger
            
        }
    
    if (score.computer===5) {
            disableBtn()
            return 'You lose the game! I hope you really like apple sauce!'
            debugger
            
    }
    return false;
}