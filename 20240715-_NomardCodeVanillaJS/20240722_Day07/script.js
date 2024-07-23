const guessform = document.querySelector("#GuessNumber");
const max = document.querySelector("input#max");
const guess = document.querySelector("input#guess");

const hidden = document.querySelectorAll(".hidden");
const choseHuman = document.querySelector("span#human");
const choseMachine = document.querySelector("span#machine");
const answer = document.querySelector("span#answer");

const getRandom = (max) => Math.floor(Math.random() * (max + 1));

function onStartGame(evnet){
    event.preventDefault();
    limit = Number(max.value);
    human=Number(guess.value);
    mechanie = getRandom(limit);

    for (var x = 0; x < hidden.length; x++)
        hidden[x].style.display = 'block';

    choseHuman.innerText = guess.value;
    choseMachine.innerText = mechanie.toString();
    if(human == mechanie){
        answer.innerText = "won";
    }else{
        answer.innerText = "lost";
    }
    
}
guessform.addEventListener("submit", onStartGame);