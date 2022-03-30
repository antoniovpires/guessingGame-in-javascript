'use strict';

/*------------------------------------------------------------*/
                        // FUNCTIONS //

// To lower the score
function downScore() {
    score--
    document.querySelector('.score').textContent = score
}

// To print messages
function printMessage(message) {
    document.querySelector('.message').textContent = message;
}

/*------------------------------------------------------------*/





/*------------------------------------------------------------*/
                        // VARIABLES //

let answer = Math.trunc(Math.random(0, 20) * (20 - 1) + 1)
let score = Number(document.querySelector('.score').textContent);
let higherScore = Number(document.querySelector('.highscore').textContent);

/*------------------------------------------------------------*/





/*------------------------------------------------------------*/
                        // AGAIN BUTTON //

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20;
    answer = Math.trunc(Math.random(0, 20) * (20 - 1) + 1)
    printMessage('Start guessing...');
    document.querySelector('.guess').value = NaN;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?';
    score = Number(document.querySelector('.score').textContent);
})
/*------------------------------------------------------------*/




/*------------------------------------------------------------*/
                        // GAME ITSELF //

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        printMessage('Please, insert a number bigger than 0!');
        downScore()
    } else if (guess === answer) {
        printMessage("That's it! You've got it right!!");
        document.querySelector('.number').textContent = answer;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > higherScore) {
            document.querySelector('.highscore').textContent = score
        }       
    } else if (guess !== answer) {
        printMessage(`Too ${guess > answer ? 'high' : 'low'}! Try another number!!`); 
        downScore()
    }
    if (score <= 0) {
        printMessage('Restart the game!');
        document.querySelector('.number').textContent = 'G A M E  O V E R';
        document.querySelector('.number').style.width = '50rem';
        document.querySelector('body').style.backgroundColor = '#b10707';
    }
})
/*------------------------------------------------------------*/