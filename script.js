'use strict';

function downScore() {
    score--
    document.querySelector('.score').textContent = score
}


let answer = Math.trunc(Math.random(0, 20) * (20 - 1) + 1)
console.log(answer)
let score = Number(document.querySelector('.score').textContent);
let higherScore = Number(document.querySelector('.highscore').textContent);


document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20;
    answer = Math.trunc(Math.random(0, 20) * (20 - 1) + 1)
    console.log(answer)
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = NaN;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?';
    score = Number(document.querySelector('.score').textContent);
})


document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Please, insert a number bigger than 0!';
        downScore()
    } else if (guess === answer) {
        document.querySelector('.message').textContent = "That's it! You've got it right!!";
        document.querySelector('.number').textContent = answer;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > higherScore) {
            document.querySelector('.highscore').textContent = score
        }       
    } else if (guess > answer) {
        document.querySelector('.message').textContent = 'Too high! Try another number!!'
        downScore()
    } else if (guess < answer) {
        document.querySelector('.message').textContent = 'Too low! Try another number!!'
        downScore()
    }
    if (score <= 0) {
        document.querySelector('.number').textContent = 'G A M E  O V E R';
        document.querySelector('.message').textContent = 'Restart the game!' 
        document.querySelector('.number').style.width = '50rem';
        document.querySelector('body').style.backgroundColor = '#b10707';
    }
})
