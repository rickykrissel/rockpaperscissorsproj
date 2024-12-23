let score=JSON.parse(localStorage.getItem('score'))||{
  wins : 0,
  losses: 0,
  ties: 0
};
updatescoreelement();
/* if (!score){
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
*/
function playGame(playerMove){
  const computerMove = pickMove()
  if (playerMove === 'scissors'){
    if (computerMove === 'rock'){
      result = 'loss';
    }
    else if (computerMove === 'scissors'){
      result = 'tie';
    }
    else if (computerMove ==='paper'){
      result = 'win';
    }
  }
  else if(playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'win';
    }
    else if (computerMove === 'scissors'){
      result = 'loss';
    }
    else if (computerMove ==='paper'){
      result = 'tie';
    }
  }
  else if(playerMove === 'rock'){
    if (computerMove === 'rock'){
      result = 'tie';
    }
    else if (computerMove === 'scissors'){
      result = 'win';
    }
    else if (computerMove ==='paper'){
      result = 'loss';
    }
  }
  if (result === 'win'){
    score.wins++;
    document.querySelector('.results').innerHTML='You win.';
  }
  else if(result === 'loss'){
    score.losses++;
    document.querySelector('.results').innerHTML='You lose.';
  }
  else if(result==='tie'){
    score.ties++;
    document.querySelector('.results').innerHTML='You tie.';
  }
  document.querySelector('.moves').innerHTML=`You <img src="images/${playerMove}-emoji.png"class = "move-icon"><img src = "images/${computerMove}-emoji.png" class = "move-icon">Computer`;
  updatescoreelement();
  

  localStorage.setItem('score', JSON.stringify(score));
  
  //alert(`Computer picked ${computerMove} you picked ${playerMove} the result is a ${result}\nWins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}
function updatescoreelement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
function pickMove(){
  let random = Math.random();
  if(random >=0 && random <1/3){
    return 'rock';
  }
  else if(random >=1/3 && random <2/3){
    return 'paper';
  }
  else{
    return'scissors';
  }
  return;
}