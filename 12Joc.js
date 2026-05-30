let score = JSON.parse(localStorage.getItem ('score')) || {
    wins: 0,
    ties: 0,
    loses: 0,
};


function playGame (playerMove){

    const cMove = computerMove ();

    result = '';

    if(playerMove === 'rock'){
if(cMove === 'rock'){
    result = 'Tie'
}
 else if(cMove === 'paper'){
    result = 'Lost'

 }

 else if(cMove === 'scissors'){
    result = 'Win'

 }
}

     else if(playerMove === 'paper'){
        if(cMove === 'paper'){
            result = 'Tie'
        }
        else if(cMove === 'scissors'){
            result = 'Lost'

        }

        else if(cMove === 'rock'){
            result = 'Win'

        }

        }

             else if(playerMove === 'scissors'){
                if(cMove === 'scissors'){
                    result = 'Tie'
                }
                else if(cMove === 'paper'){
                    result = 'Win'

                }

                else if(cMove === 'rock'){
                    result = 'Lost'

                }

                
                }

            if(result === 'Win'){
                score.wins+= 1;
            }
            else if (result === 'Tie'){
                score.ties+=1;
            }

            else if (result === 'Lost'){
                score.loses+=1;
            }
        

                    localStorage.setItem('score',JSON.stringify(score))
                    updateScoreElement();
            

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML = `Tu ai ales
                            <img src="/images/${playerMove}-emoji.png" class="move-icon" >
                            calculatorul
                            <img src="/images/${cMove}-emoji.png" class="move-icon">
                            `;

        }

        function updateScoreElement(){

                document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}
                Ties: ${score.ties}
                Loses: ${score.loses}`;
            }


function computerMove(){
const randomNumber = Math.random();

let cMove = '';

if(randomNumber >= 0 && randomNumber <= 1/3){
    cMove = 'rock';
}
else if(randomNumber > 1/3 && randomNumber <= 2/3){
    cMove = 'paper';
}

else if(randomNumber > 2/3 && randomNumber <= 3){
    cMove = 'scissors';
}
return cMove;


}

let isAuto = false;
let interval;

function autoPlay(){
    if(!isAuto){
    interval = setInterval(function(){
    const miscare = computerMove();
    playGame(miscare);
        },1000) 

        isAuto=true;
        }

    else{
clearInterval(interval);
isAuto=false;

    }
}